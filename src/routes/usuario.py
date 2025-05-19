from flask import Blueprint, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from api.models import User
from api.models import db
usuario_bp = Blueprint('usuario', __name__)
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
    user = User(name=data['name'], email=data['email'], password=data['password'], is_active=True)
    try:
        db.session.add(user)
        db.session.commit()
        return jsonify({"msg": "Usuario creado"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"msg": "Error al crear el usuario"}), 500