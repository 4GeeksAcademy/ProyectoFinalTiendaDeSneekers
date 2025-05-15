from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean, Integer, ARRAY, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(120), nullable=False)
    email: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean(), nullable=False)

    carrito = relationship("Carrito", back_populates="usuario", cascade="all, delete-orphan")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
        }


class Marca(db.Model):
    __tablename__ = "marca"
    id: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)

    modelos = relationship("Modelo", back_populates="marca")
    zapatillas = relationship("Zapatilla", back_populates="marca")

    def serialize(self):
        return { "nombre": self.nombre}


class Modelo(db.Model):
    __tablename__ = "modelo"
    id: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str] = mapped_column(String(120), nullable=False)
    marca_id: Mapped[int] = mapped_column(ForeignKey("marca.id"), nullable=False)
    precio: Mapped[int] = mapped_column(Integer, nullable=False)
    oferta: Mapped[bool] = mapped_column(Boolean, nullable=False)

    marca = relationship("Marca", back_populates="modelos")
    zapatillas = relationship("Zapatilla", back_populates="modelo")

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "precio": self.precio,
            "oferta": self.oferta,
            "marca": self.marca.serialize()
        }


class Zapatilla(db.Model):
    __tablename__ = "zapatilla"
    id: Mapped[int] = mapped_column(primary_key=True)
    modelo_id: Mapped[int] = mapped_column(ForeignKey("modelo.id"), nullable=False)
    marca_id: Mapped[int] = mapped_column(ForeignKey("marca.id"), nullable=False)
    tallas: Mapped[list[int]] = mapped_column(ARRAY(Integer), nullable=False)

    modelo = relationship("Modelo", back_populates="zapatillas")
    marca = relationship("Marca", back_populates="zapatillas")
    en_carrito = relationship("Carrito", back_populates="zapatilla", cascade="all, delete-orphan")

    def serialize(self):
        return {
            "id": self.id,
            "modelo": self.modelo.serialize(),
            "marca": self.marca.serialize(),
            "tallas": self.tallas,
        }


class Carrito(db.Model):
    __tablename__ = "carrito"
    id: Mapped[int] = mapped_column(primary_key=True)
    usuario_id: Mapped[int] = mapped_column(ForeignKey("user.id"), nullable=False)
    zapatilla_id: Mapped[int] = mapped_column(ForeignKey("zapatilla.id"), nullable=False)
    talla: Mapped[int] = mapped_column(nullable=False)
    cantidad: Mapped[int] = mapped_column(default=1, nullable=False)

    usuario = relationship("User", back_populates="carrito")
    zapatilla = relationship("Zapatilla", back_populates="en_carrito")

    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "zapatilla_id": self.zapatilla_id,
            "talla": self.talla,
            "cantidad": self.cantidad
        }
