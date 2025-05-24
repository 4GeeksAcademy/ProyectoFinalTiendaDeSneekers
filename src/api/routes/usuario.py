from flask import Blueprint, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from src.api.models import User, Carrito, CarritoZapatilla
from src.api.models import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token,jwt_required,get_jwt_identity
from flask_jwt_extended import jwt_required, get_jwt_identity
from .zapatillas import Zapatilla
usuario_bp = Blueprint('usuario', __name__)
@usuario_bp.route('/users', methods=['GET'])
def get_usuarios():
    users = User.query.all()
    if users:
        return jsonify([user.serialize() for user in users]), 200
    else:
        return jsonify({"msg": "No hay usuarios"}), 404
    

@usuario_bp.route('/users/<int:id>', methods=['GET'])
def get_usuario(id):
    user = User.query.get(id)
    if user:
        return jsonify(user.serialize()), 200
    else:
        return jsonify({"msg": "Usuario no encontrado"}), 404
    
@usuario_bp.route('/users', methods=['POST'])
def add_user():
    data = request.get_json()
    name=data.get('name')
    email=data.get('email')
    password=data.get('password')
    if not name or not email or not password:
        return jsonify({"msg": "Faltan datos"}), 400
    if User.query.filter_by(name=name).first():
        return jsonify({"msg": "El nombre ya está en uso"}), 400
    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "El correo ya está en uso"}), 400
    password = generate_password_hash(password)
    user = User(name=name, email=email, password=password, is_active=True)
    carrito = Carrito(usuario=user)
    try:
        
        db.session.add(user)
        db.session.add(carrito)
        db.session.commit()
        return jsonify({"msg": "Usuario creado"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    
@usuario_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    print(data.get('email'))
    email = data.get('email')
    password = data.get('password')
    if not email or not password:
        return jsonify({"msg": "Faltan datos"}), 400
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"msg": "Usuario no encontrado"}), 404
    if  check_password_hash(user.password, password):
        access_token = create_access_token(identity=str(user.id))
        print(access_token)
        return jsonify(token=access_token, user=user.name), 200
    else:
        return jsonify({"msg": "wrong credentials"}), 401
    
@usuario_bp.route('/add_to_cart', methods=['POST'])
@jwt_required()
def add_to_cart():
    user_id = int(get_jwt_identity())
    data = request.get_json()

    zapatilla_id = data.get('zapatilla_id')
    talla = data.get('talla')
    cantidad = data.get('cantidad')

    if not all([zapatilla_id, talla, cantidad]):
        return jsonify({"msg": "Faltan datos"}), 400

    user = User.query.get(user_id)
    if not user:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    carrito = user.carrito 
    
    zapatilla = Zapatilla.query.get(zapatilla_id)
    if not zapatilla:
        return jsonify({"msg": "Zapatilla no encontrada"}), 404

    for item in carrito.carrito_zapatillas:
        if item.zapatilla_id == zapatilla_id and item.talla == talla:
            item.cantidad += int(cantidad)
            db.session.commit()
            return jsonify({"msg": "Cantidad actualizada"}), 200

    nuevo_item = CarritoZapatilla(
        carrito_id=carrito.id,
        zapatilla_id=zapatilla.id,
        talla=talla,
        cantidad=cantidad
    )
    try:
        db.session.add(nuevo_item)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

    return jsonify({"msg": "Zapatilla añadida al carrito"}), 200