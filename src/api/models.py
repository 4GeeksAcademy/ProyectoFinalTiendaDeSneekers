from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import String, Boolean,  Integer, ARRAY, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship


db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "user"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(120), nullable=False)
    email: Mapped[str] = mapped_column(
        String(120), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean(), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            # do not serialize the password, its a security breach
        }


class Marca(db.Model):
    __tablename__ = "marcas"
    id: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)

    # Relación con los modelos
    modelos = relationship("Modelo", back_populates="marca")

    def serialize(self):
        return {"id": self.id, "nombre": self.nombre}


class Modelo(db.Model):
    __tablename__ = "modelos"
    id: Mapped[int] = mapped_column(primary_key=True)
    nombre: Mapped[str] = mapped_column(String(120), nullable=False)
    marca_id: Mapped[int] = mapped_column(ForeignKey("marcas.id"), nullable=False)
    precio: Mapped[int] = mapped_column(Integer, nullable=False)

    marca = relationship("Marca", back_populates="modelos")
    zapatillas = relationship("Zapatillas", back_populates="modelo")

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "precio": self.precio,
            "marca": self.marca.serialize()
        }


class Zapatillas(db.Model):
    __tablename__ = "zapatillas"
    id: Mapped[int] = mapped_column(primary_key=True)
    modelo_id: Mapped[int] = mapped_column(ForeignKey("modelos.id"), nullable=False)
    marca_id: Mapped[int] = mapped_column(ForeignKey("marcas.id"), nullable=False)  # Referencia directa a la marca
    tallas: Mapped[list[int]] = mapped_column(ARRAY(Integer), nullable=False)
    oferta: Mapped[bool] = mapped_column(Boolean, nullable=False)

    modelo = relationship("Modelo", back_populates="zapatillas")
    marca = relationship("Marca", back_populates="modelos")  # Relación con la marca

    def serialize(self):
        return {
            "id": self.id,
            "modelo": self.modelo.serialize(),
            "marca": self.marca.serialize(),
            "tallas": self.tallas,
            "oferta": self.oferta
        }

class carrito(db.Model):
    __tablename__ = "carrito"
    id: Mapped[int] = mapped_column(primary_key=True)
    usuario_id: Mapped[int] = mapped_column(
        ForeignKey("user.id"), nullable=False)
    zapatillas_id: Mapped[int] = mapped_column(
        ForeignKey('zapatillas.id'), nullable=False)
    talla: Mapped[int] = mapped_column(nullable=False)
    cantidad: Mapped[int] = mapped_column(default=1, nullable=False)

    usuario = relationship("User", back_populates="carrito")
    zapatilla = relationship("Zapatillas", back_populates="en_carrito")

    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "zapatillas_id": self.zapatillas_id,
            "talla": self.talla,
            "cantidad": self.cantidad
        }
