import React from "react";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";

const PoliticaPrivacidad = () => {
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">Política de Privacidad</h1>

      <Row className="align-items-center mb-5">
        <Col md={6}>
          <Image
            src="https://images.unsplash.com/photo-1590080877777-c60aefa98c45?auto=format&fit=crop&w=800&q=80"
            alt="Privacidad"
            fluid
            rounded
          />
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            En <strong>SneakPeaks</strong> valoramos tu privacidad y estamos comprometidos a proteger tus datos personales. 
            Recopilamos información únicamente con fines claros y legítimos, como procesar tus pedidos, mejorar nuestros servicios 
            y personalizar tu experiencia de compra.
          </p>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            Nunca compartimos tu información con terceros sin tu consentimiento explícito. Implementamos medidas de seguridad 
            para proteger tus datos contra accesos no autorizados, pérdidas o alteraciones.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col md={{ span: 6, order: 2 }} className="mt-4 mt-md-0">
          <Image
            src="https://images.unsplash.com/photo-1580744691998-317da96c9979?auto=format&fit=crop&w=800&q=80"
            alt="Seguridad de datos"
            fluid
            rounded
          />
        </Col>
        <Col md={{ span: 6, order: 1 }}>
          <h3>Cookies y tu experiencia</h3>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            Usamos cookies para mejorar la navegación, ofrecerte contenido personalizado y analizar el tráfico de nuestro sitio. 
            Puedes configurar tus preferencias o desactivar las cookies en cualquier momento desde la configuración de tu navegador.
          </p>

          <h3>Contacto y derechos</h3>
          <ListGroup variant="flush" style={{ fontSize: "1.1rem" }}>
            <ListGroup.Item>
              Tienes derecho a acceder, rectificar o eliminar tus datos personales.
            </ListGroup.Item>
            <ListGroup.Item>
              Para ejercer tus derechos o para cualquier consulta, puedes contactar a nuestro Delegado de Protección de Datos en: <br />
              <a href="mailto:privacidad@sneakpeak.com">privacidad@sneakpeak.com</a>
            </ListGroup.Item>
            <ListGroup.Item>
              Nos comprometemos a responder en un plazo máximo de 30 días.
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default PoliticaPrivacidad;
