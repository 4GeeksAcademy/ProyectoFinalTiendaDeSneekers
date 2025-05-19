from flask import Blueprint, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from src.api.models import db, Zapatilla, Marca, Modelo
from flask_jwt_extended import jwt_required
zapatillas_bp = Blueprint('zapatillas', __name__)
@zapatillas_bp.route('/marca', methods=['POST'])


@zapatillas_bp.route('/marca/<string:marca_name>', methods=['GET'])
def get_marca(marca_name):
    try:
        marca = Marca.query.filter_by(nombre=marca_name).first()
        if not marca:
            return jsonify({"msg": "Marca no encontrada"}), 404
        return jsonify(marca.serialize()), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@zapatillas_bp.route('/zapatillas', methods=['POST'])
def add_zapatillas():
    data = request.get_json()
    if not data:
        return jsonify({"msg": "No se ha enviado ningun dato"}), 400
    if 'marca' not in data or 'nombre' not in data or 'talla' not in data or 'precio' not in data or 'oferta' not in data:
        return jsonify({"error": "Faltan datos obligatorios"}), 400
    try:
        marca = Marca.query.filter_by(nombre=data['marca']).first()
        if not marca:
            marca = Marca(nombre=data['marca'])
            db.session.add(marca)
            db.session.commit()
        print(marca.id)
        modelo = Modelo.query.filter_by(nombre=data['nombre']).first()
        if not modelo:
            modelo = Modelo(nombre=data['nombre'], precio=data['precio'], oferta=data['oferta'],descripcion=data.get('descripcion'),img=data.get('img'), marca_id=marca.id)
            db.session.add(modelo)
            db.session.commit()
        else:
            return jsonify({"msg": "El modelo ya existe"}), 200
        zapatilla = Zapatilla(tallas=data['talla'], modelo_id=modelo.id)
        db.session.add(zapatilla)
        db.session.commit()
        return jsonify({"msg": "Añadidas"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
@zapatillas_bp.route('/zapatillas/<int:zapatilla_id>', methods=['PUT'])
def update_zapatilla(zapatilla_id):
    data= request.get_json()
    zapatilla= Zapatilla.query.get(zapatilla_id)
    if not zapatilla:
        return jsonify({"msg": "Zapatilla no encontrada"}), 404
    modelo = Modelo.query.filter_by(id=zapatilla.modelo.id).first()
    if not data:
        return jsonify({"msg": "No se ha enviado ningun dato"}), 400
    if 'nombre' in data:
        modelo.nombre = data['nombre']
    if 'precio' in data:
        modelo.precio = data['precio']  
    if 'oferta' in data:
        modelo.oferta = data['oferta']
    if 'descripcion' in data:
        modelo.descripcion = data['descripcion']
    if 'img' in data:
        modelo.img = data['img']
    if 'talla' in data:
        zapatilla.tallas = data['talla']
    db.session.commit()
    return jsonify({"msg": "Zapatilla actualizada"}), 200

@zapatillas_bp.route('/zapatillas',methods=['GET'])
def get_zapatillas():
    try:
        zapatillas = Zapatilla.query.all()
        if not zapatillas:
            return jsonify({"msg": "No hay zapatillas"}), 404
        return jsonify([zapatilla.serialize() for zapatilla in zapatillas]), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
