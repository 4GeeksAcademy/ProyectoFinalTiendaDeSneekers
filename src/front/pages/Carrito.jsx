import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { useAuth } from "../hooks/authContext";

export default function Carrito() {
  const {  cart } = useAuth();
  const [total , setTotal] = useState(0)
  console.log(cart);
  
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
                      {item.zapatilla.modelo.nombre}
                      <p>Talla { item.talla}</p>
                      <span>
                        {item.cantidad} x {item.zapatilla.modelo.precio}€ = 
                        {item.cantidad * item.zapatilla.modelo.precio}€
                      </span>
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
