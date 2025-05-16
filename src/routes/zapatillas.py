from flask import Blueprint, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from api.models import db, Zapatilla, Marca, Modelo
zapatillas_bp = Blueprint('zapatillas', __name__)
@zapatillas_bp.route('/marca', methods=['POST'])

def add_marca():
    data = request.get_json()
    if not data:
        return jsonify({"msg": "No se ha enviado ningun dato"}), 400
    if 'nombre' not in data:
        return jsonify({"error":"Faltan datos obligatorios"}), 400
    try:
        marca= Marca(nombre=data['nombre'])
        db.session.add(marca)
        db.session.commit()
        return jsonify(marca.serialize()), 201
    except Exception as e:
            db.session.rollback()
            return jsonify({"error": str(e)}), 500
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
        modelo = Modelo.query.filter_by(nombre=data['nombre']).first()
        if not modelo:
            modelo = Modelo(nombre=data['nombre'], precio=data['precio'], oferta=data['oferta'], marca_id=1)
            db.session.add(modelo)
            db.session.commit()

            zapatilla = Zapatilla(tallas=data['talla'], modelo_id=modelo.id, marca_id=1)
            db.session.add(zapatilla)
            db.session.commit()
            return jsonify({"msg": "Añadidas"}), 201
        else:
            # Opcional: crear zapatilla con el modelo existente o devolver un mensaje
            return jsonify({"msg": "El modelo ya existe"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    
@zapatillas_bp.route('/zapatillas', methods=['GET'])
def get_zapatillas():
    try:
        zapatillas = Zapatilla.query.all()
        return jsonify([zapatilla.serialize() for zapatilla in zapatillas]), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500