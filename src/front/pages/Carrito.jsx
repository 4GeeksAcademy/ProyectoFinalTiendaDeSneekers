import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { useAuth } from "../hooks/authContext";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

export default function Carrito() {
  const {  cart, removeFromCart } = useAuth();
  const [total , setTotal] = useState(0)
  const handleDelete = ( itemId) => {
    
      const res = fetch(`${import.meta.env.VITE_BACKEND_URL}/cart/${itemId}`, {
        method: 'DELETE',
        headers: {
          "content-type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
      });
      res.then(response => {
        if (response.ok) {
          console.log("Producto eliminado del carrito con ID:", itemId);
          removeFromCart(itemId);
        } else {
          console.error("Error al eliminar el producto del carrito");
        }
      }).catch(error => {
        console.error("Error de red al eliminar el producto:", error);
      });
    


      
     
  }
  useEffect( () => {
    if (cart) {
    const listTotal = cart
    const total = listTotal.reduce((acc, item) => {
      return acc + (item.cantidad * item.zapatilla.modelo.precio);
    }, 0);
      setTotal(total)
    }
  }, [cart])
  
  return (
    <div
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        color: "white",
      }}
    >
      <Container>
        <h1 className="mb-4 text-center">Carrito de Compras</h1>
        <p className="lead text-center mb-5">
          Aquí puedes revisar y gestionar los productos que has añadido a tu
          carrito.
        </p>

        <Row className="justify-content-center">
          <Col md={8}>
            <Card bg="dark" text="white" className="mb-3 shadow-lg">
              <Card.Header>
                <h5>Productos en tu carrito</h5>
              </Card.Header>
              <ListGroup variant="flush">
                {/* Simulación de productos */}
                {cart ? (
                  cart.map((item, index) => (
                    <ListGroup.Item
                      key={index}
                      className="d-flex justify-content-between align-items-center bg-secondary text-white"
                    >
                      {item.zapatilla?.modelo.nombre}
                      <p>Talla { item.talla}</p>
                      <span>
                        {item.cantidad} x {item.zapatilla.modelo.precio}€ = 
                        {item.cantidad * item.zapatilla.modelo.precio}€
                      </span>


                      <spam>

                        <Button
                          variant="danger"
                          className="ms-2"
                          onClick={() => handleDelete(item.id)}
                        >
                          <MdDeleteOutline className="w-100"/>
                        </Button>
                      </spam>

                    </ListGroup.Item>
                  ))
                ) : (
                  <ListGroup.Item className="text-center">
                    Tu carrito está vacío.
                  </ListGroup.Item>
                )}
               
              </ListGroup>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <strong>{total}€</strong>
                <Button variant="success">Proceder al pago</Button>
              </Card.Footer>
            </Card>

            {/* Si no hay productos */}
            {/* <div className="alert alert-info text-center">
              Tu carrito está vacío. Agrega productos para empezar a comprar.
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
