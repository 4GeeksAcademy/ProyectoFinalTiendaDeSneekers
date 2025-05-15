from flask import Blueprint, jsonify, request
from flask_sqlalchemy import SQLAlchemy

zapatillas_bp = Blueprint('zapatillas', __name__)

@zapatillas_bp.route('/zapatillas',methods=['GET'])
def saludo():
    print("Hola desde la ruta de zapatillas")
    return jsonify({"msg": "Hola desde la ruta de zapatillas"}), 200