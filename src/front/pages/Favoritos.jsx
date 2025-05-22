import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Favoritos() {
  return (
    <div
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        color: "#333",
      }}
    >
      <Container>
        <h1 className="mb-4 text-center">Tus Favoritos</h1>
        <p className="lead text-center mb-5">
          Aquí puedes ver los productos que has guardado para más tarde.
        </p>

        <Row className="justify-content-center g-4">
          {/* Simulación de tarjetas de productos */}
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1600185366840-c48674d4575f?auto=format&fit=crop&w=600&q=80"
                alt="Producto 1"
              />
              <Card.Body>
                <Card.Title>Zapatillas Retro</Card.Title>
                <Card.Text>$75.00</Card.Text>
                <Button variant="warning" className="me-2">
                  Comprar
                </Button>
                <Button variant="outline-danger">Eliminar</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80"
                alt="Producto 2"
              />
              <Card.Body>
                <Card.Title>Camiseta Deportiva</Card.Title>
                <Card.Text>$25.00</Card.Text>
                <Button variant="warning" className="me-2">
                  Comprar
                </Button>
                <Button variant="outline-danger">Eliminar</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
                alt="Producto 3"
              />
              <Card.Body>
                <Card.Title>Calcetines Deportivos</Card.Title>
                <Card.Text>$10.00</Card.Text>
                <Button variant="warning" className="me-2">
                  Comprar
                </Button>
                <Button variant="outline-danger">Eliminar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Si no hay favoritos */}
        {/* <div className="alert alert-warning text-center mt-5">
          No tienes productos favoritos aún.
        </div> */}
      </Container>
    </div>
  );
}
