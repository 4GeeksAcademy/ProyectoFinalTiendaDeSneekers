import React from "react";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";

const PoliticaPrivacidad = () => {
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">Política de Privacidad</h1>

      <Row className="align-items-center mb-5">
        <Col md={6}>
          <Image
            src="https://d3t4nwcgmfrp9x.cloudfront.net/upload/crear-politica-privacidad-pagina-web.jpg"
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
            src="https://s03.s3c.es/imag/_v0/770x420/d/4/5/seguridad-datos-ciberseguridad-dreamtime-770x420.jpg"
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
