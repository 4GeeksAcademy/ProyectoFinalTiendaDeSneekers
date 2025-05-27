from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from src.api.models import User, Carrito, CarritoZapatilla
from .zapatillas import Zapatilla
from src.api.models import db

carrito_bp=Blueprint('carrito', __name__)


@carrito_bp.route('/add_to_cart', methods=['POST'])
@jwt_required()
def add_to_cart():
    print("Añadiendo al carrito")
    user_id = int(get_jwt_identity())
    data = request.get_json()

    try:
        zapatilla_id = int(data.get('zapatilla_id'))
        talla = int(data.get('talla'))
        cantidad = int(data.get('cantidad'))
    except (TypeError, ValueError):
        return jsonify({"msg": "Datos inválidos"}), 400

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
        cantidad=cantidad,
    )
    try:
        db.session.add(nuevo_item)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        print(f"Error al añadir zapatilla al carrito: {e}")
        return jsonify({"error": str(e)}), 500

    return jsonify(zapatilla=nuevo_item.serialize()), 200

@carrito_bp.route('/cart/<int:item>',methods=['DELETE'])
@jwt_required()
def delete_cart(item):
    user=User.query.get(get_jwt_identity())
    if not user:
        return jsonify({"msg": "Usuario no encontrado"}), 404
    carrito = user.carrito
    if not carrito:
        return jsonify({"msg": "Carrito no encontrado"}), 404
    try:
        item_to_delete = CarritoZapatilla.query.get(item)
        if not item_to_delete:
            return jsonify({"msg": "Item no encontrado"}), 404
        db.session.delete(item_to_delete)
        db.session.commit()
        return jsonify({"msg": "Item eliminado del carrito"}), 200
    except Exception as e:
        db.session.rollback()
        print(f"Error al eliminar item del carrito: {e}")
        return jsonify({"error": str(e)}), 500
@carrito_bp.route('/cart/<int:item_id>',methods=['PUT'])
@jwt_required()
def update_cart(item_id):
    user = User.query.get(get_jwt_identity())
    if not user:
        return jsonify({"msg": "Usuario no encontrado"}), 404
    carrito = user.carrito
    if not carrito:
        return jsonify({"msg": "Carrito no encontrado"}), 404

    data = request.get_json()
    try:
        cantidad = int(data.get('cantidad'))

    except (TypeError, ValueError):
        return jsonify({"msg": "Datos inválidos"}), 400

    item_to_update = CarritoZapatilla.query.get(item_id)
    if not item_to_update:
        return jsonify({"msg": "Item no encontrado"}), 404

    item_to_update.cantidad = cantidad
    db.session.commit()

    return jsonify({"msg": "Cantidad actualizada", "item": item_to_update.serialize()}), 200