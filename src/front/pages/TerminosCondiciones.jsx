import React from "react";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";

const TerminosCondiciones = () => {
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">Términos y Condiciones</h1>

      <Row className="align-items-center mb-5">
        <Col md={6}>
          <Image
            src="https://images.unsplash.com/photo-1563986768609-9a8649e8d138?auto=format&fit=crop&w=800&q=80"
            alt="Contrato y términos"
            fluid
            rounded
          />
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            Al usar nuestro sitio web y realizar compras en SneakPeaks, aceptas cumplir con nuestros términos y condiciones. 
            Estos términos están diseñados para proteger tanto a los clientes como a la tienda, asegurando una experiencia clara y justa.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            Es importante revisar estos términos antes de realizar cualquier compra. Si tienes alguna duda, no dudes en contactarnos.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col md={{ span: 6, order: 2 }} className="mt-4 mt-md-0">
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Legal terms"
            fluid
            rounded
          />
        </Col>
        <Col md={{ span: 6, order: 1 }}>
          <h3>Condiciones clave</h3>
          <ListGroup variant="flush" style={{ fontSize: "1.1rem" }}>
            <ListGroup.Item>
              Los productos están sujetos a disponibilidad y pueden variar en stock.
            </ListGroup.Item>
            <ListGroup.Item>
              Los precios pueden modificarse sin previo aviso, pero los pedidos confirmados mantienen su precio.
            </ListGroup.Item>
            <ListGroup.Item>
              Las imágenes de los productos son orientativas y pueden diferir ligeramente del artículo real.
            </ListGroup.Item>
            <ListGroup.Item>
              Es tu responsabilidad proporcionar datos correctos y completos al realizar tu pedido.
            </ListGroup.Item>
            <ListGroup.Item>
              Nos reservamos el derecho de cancelar o rechazar pedidos por razones justificadas.
            </ListGroup.Item>
          </ListGroup>

          <p className="mt-3" style={{ fontSize: "1.1rem" }}>
            Para consultas legales o aclaraciones, contáctanos en: <br />
            <a href="mailto:legal@sneakpeak.com">legal@sneakpeak.com</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default TerminosCondiciones;
