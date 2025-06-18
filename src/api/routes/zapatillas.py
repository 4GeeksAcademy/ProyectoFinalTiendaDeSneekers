from flask import Blueprint, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from api.models import db, Zapatilla, Marca, Modelo,User, TallaStock
from flask_jwt_extended import jwt_required, get_jwt_identity
from sqlalchemy.orm import joinedload

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
@jwt_required()
def add_zapatillas():
    user_id = int(get_jwt_identity())
    user = User.query.get(user_id)
    if not user or user.role != 'SuperAdmin':
        return jsonify({"msg": "No tienes permisos para añadir zapatillas"}), 403
    data = request.get_json()
    if not data:
        print("No se ha enviado ningun dato")
        return jsonify({"msg": "No se ha enviado ningun dato"}), 400
    required_fields = ['marca', 'nombre', 'precio', 'oferta', 'genero', 'tallas']
    if not all(field in data for field in required_fields):
        return jsonify({"error": "Faltan datos obligatorios"}), 400
    
    try:
        marca = Marca.query.filter_by(nombre=data['marca']).first()
        if not marca:
            marca = Marca(nombre=data['marca'])
            db.session.add(marca)
            db.session.commit()
        modelo = Modelo.query.filter_by(nombre=data['nombre']).first()
        if not modelo:
            modelo = Modelo(nombre=data['nombre'],
                            precio=data['precio'], 
                            oferta=data['oferta'],
                            descripcion=data.get('descripcion'),
                            img=data.get('img'), 
                            marca_id=marca.id, 
                            genero=data.get('genero')
                            )
            db.session.add(modelo)
            db.session.commit()
        else:
            print("El modelo ya existe")
            return jsonify({"msg": "El modelo ya existe"}), 409
        zapatilla = Zapatilla( modelo_id=modelo.id)
        db.session.add(zapatilla)
        db.session.commit()

        for entry in data['tallas']:
            talla_stock = TallaStock(
                zapatilla_id=zapatilla.id,
                talla=entry['talla'],
                stock=entry['stock']
            )
            db.session.add(talla_stock)

        db.session.commit()
        return jsonify(zapatilla.serialize()), 201
    except Exception as e:
        print(f"Error al añadir zapatilla: {e}")
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    
@zapatillas_bp.route('/zapatillas/<int:zapatilla_id>', methods=['PUT'])
@jwt_required()
def update_zapatilla(zapatilla_id):
    user_id = int(get_jwt_identity())
    user = User.query.get(user_id)
    if not user or user.role != 'SuperAdmin':
        return jsonify({"msg": "No tienes permisos para actualizar zapatillas"}), 403
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
    if 'genero' in data:
        if data['genero'] == 'hombre':
            data['genero'] = 'man'
        modelo.genero = data['genero']
    db.session.commit()
    return jsonify(zapatilla.serialize() ), 203

@zapatillas_bp.route('/zapatillas',methods=['GET'])
def get_zapatillas():
    try:
        marcas = Marca.query.all()
        if not marcas:
            return jsonify({"msg": "No hay marcas"}), 404
        
        data=[]
        for marca in marcas:
            zapatillas =[]
            for modelo in marca.modelos:
                for zapatilla in modelo.zapatillas:
                    zapatillas.append(zapatilla.serialize())
            data.append({
                "marca": marca.nombre,
                "zapatillas": zapatillas
            })  
        return jsonify(data), 200
    except Exception as e:
        print(f"Error al obtener zapatillas: {e}")
        return jsonify({"msg": str(e)}), 500
    
@zapatillas_bp.route('/zapatillas/gender/<string:gender>', methods=['GET'])
def data_for_genere(gender):
    
    try:
        marcas = Marca.query.all()
        if not marcas:
            return jsonify({"msg": "No hay marcas"}), 404
        
        data=[]
        for marca in marcas:
            zapatillas =[]
            for modelo in marca.modelos:
                for zapatilla in modelo.zapatillas:
                    if zapatilla.modelo.genero == "hombre":
                        zapatilla.modelo.genero = "man"
                    if(zapatilla.modelo.genero == gender):
                        zapatillas.append(zapatilla.serialize())
            data.append({
                "marca": marca.nombre,
                "zapatillas": zapatillas
            })  
        return jsonify(data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
@zapatillas_bp.route('/zapatillas/<int:zapatillas_id>', methods=['DELETE'])
@jwt_required()
def delete_zapatilla(zapatillas_id):
    try:
        zapatilla = Zapatilla.query.get(zapatillas_id)
        if not zapatilla:
            return jsonify({"msg": "Zapatilla no encontrada"}), 404
        modelo = Modelo.query.filter_by(id=zapatilla.modelo.id).first()
        if not modelo:
            return jsonify({"msg": "Modelo no encontrado"}), 404
        talla = TallaStock.query.filter_by(zapatilla_id=zapatillas_id).all()
        if not talla:
            return jsonify({"msg": "No hay tallas asociadas a esta zapatilla"}), 404
        for talla_stock in talla:
            db.session.delete(talla_stock)   
        db.session.delete(zapatilla)
        db.session.delete(modelo)
        db.session.commit()
        return jsonify({"msg": "Zapatilla eliminada"}), 200
    except Exception as e:
        print(f"Error al buscar modelo: {e}")
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
@zapatillas_bp.route('/modelo/<string:modelo_name>', methods=['GET'])
def search_modelo(modelo_name):
    try:
        zapatillas= Zapatilla.query.filter(Zapatilla.modelo.has(Modelo.nombre.ilike(f"{modelo_name}%"))).all()
        if not zapatillas:
            return jsonify({"msg": "Zapatilla no encontrada"}), 404
        
        return jsonify( [zapatilla.serialize() for zapatilla in zapatillas ]), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500