import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";

export default function Carrito() {
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
                <ListGroup.Item className="d-flex justify-content-between align-items-center bg-secondary text-white">
                  Zapatillas deportivas
                  <span>2 x $50 = $100</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center bg-secondary text-white">
                  Camiseta deportiva
                  <span>1 x $25 = $25</span>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center bg-secondary text-white">
                  Calcetines deportivos
                  <span>3 x $5 = $15</span>
                </ListGroup.Item>
              </ListGroup>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <strong>Total: $140</strong>
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
