from flask import Blueprint, jsonify, request
from flask_sqlalchemy import SQLAlchemy

usuario_bp = Blueprint('usuario', __name__)
@usuario_bp.route('/<int:id>', methods=['GET'])
def get_usuario(id):
    from api.models import User
    user = User.query.get(id)
    if user:
        return jsonify(user.serialize()), 200
    else:
        return jsonify({"msg": "Usuario no encontrado"}), 404