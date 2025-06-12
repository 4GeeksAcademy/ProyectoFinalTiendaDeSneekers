from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean, Integer, ARRAY, ForeignKey,Column, Table,Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

db = SQLAlchemy()



class User(db.Model):
    __tablename__ = "user"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(120), nullable=False)
    email: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(nullable=False)
    role: Mapped[str] = mapped_column(String(50), nullable=False, default="user")
    img: Mapped[str] = mapped_column(Text, nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean(), nullable=False)
    
    carrito = relationship("Carrito", back_populates="usuario", uselist=False, cascade="all, delete-orphan")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "role": self.role,
            "img": self.img,
            "carrito": self.carrito.serialize() if self.carrito else None
        }


class Marca(db.Model):
    __tablename__ = "marca"
    id: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)

    modelos = relationship("Modelo", back_populates="marca")

    def serialize(self):
        return { 
            "nombre": self.nombre,
            "modelos": [modelo.serialize() for modelo in self.modelos]
            }


class Modelo(db.Model):
    __tablename__ = "modelo"
    id: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str] = mapped_column(String(120), nullable=False)
    marca_id: Mapped[int] = mapped_column(ForeignKey("marca.id"), nullable=False)
    precio: Mapped[int] = mapped_column(Integer, nullable=False)
    oferta: Mapped[bool] = mapped_column(Boolean, nullable=False)
    genero: Mapped[str] = mapped_column(String(120), nullable=False)
    descripcion: Mapped[str] = mapped_column(String(255), nullable=True)
    img: Mapped[str] = mapped_column(Text, nullable=True)
    marca = relationship("Marca", back_populates="modelos")
    zapatillas = relationship("Zapatilla", back_populates="modelo")
    

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "precio": self.precio,
            "descripcion": self.descripcion,
            "img": self.img,
            "oferta": self.oferta,
            "marca": self.marca.nombre if self.marca else None,
            "genero": self.genero,
        }


class Zapatilla(db.Model):
    __tablename__ = "zapatilla"
    id: Mapped[int] = mapped_column(primary_key=True)
    modelo_id: Mapped[int] = mapped_column(ForeignKey("modelo.id"), nullable=False)
    tallas: Mapped[list[int]] = mapped_column(ARRAY(Integer), nullable=False)
    stock: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    modelo = relationship("Modelo", back_populates="zapatillas")
    def serialize(self):
        return {
            "id": self.id,
            "modelo": self.modelo.serialize(),
            "tallas": self.tallas,
            "stock": self.stock
        }

class CarritoZapatilla(db.Model):
    __tablename__ = "carrito_zapatilla"
    id: Mapped[int] = mapped_column(primary_key=True)
    carrito_id = mapped_column(ForeignKey("carrito.id"),nullable=False)
    zapatilla_id = mapped_column(ForeignKey("zapatilla.id"),nullable=False)
    talla = mapped_column(Integer, nullable=False)
    cantidad = mapped_column(Integer, nullable=False)

    carrito = relationship("Carrito", back_populates="carrito_zapatillas")
    zapatilla = relationship("Zapatilla")

    def serialize(self):
        return {
            "id": self.id,
            "zapatilla": self.zapatilla.serialize(),
            "talla": self.talla,
            "cantidad": self.cantidad
        }
class Carrito(db.Model):
    __tablename__ = "carrito"
    id: Mapped[int] = mapped_column(primary_key=True)
    usuario_id: Mapped[int] = mapped_column(ForeignKey("user.id"), nullable=False)

    usuario = relationship("User", back_populates="carrito")
    carrito_zapatillas = relationship("CarritoZapatilla", back_populates="carrito", cascade="all, delete-orphan")

    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "items": [item.serialize() for item in self.carrito_zapatillas]
        }
