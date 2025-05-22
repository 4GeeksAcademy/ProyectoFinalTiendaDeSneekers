import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const SobreNosotros = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-4">Sobre Nosotros</h1>
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
            alt="Equipo de SneakPeaks"
            fluid
            rounded
            className="mb-4"
          />
        </Col>
        <Col md={6}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            En <strong>SneakPeaks</strong> somos más que una tienda de zapatillas: somos una comunidad apasionada por el estilo,
            la cultura urbana y la exclusividad. Fundada en 2021, nuestra misión ha sido conectar a amantes del calzado con los modelos
            más icónicos y exclusivos del mercado.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Nuestro equipo está compuesto por expertos que conocen el mundo sneaker al detalle, garantizando que cada producto que ofrecemos
            sea auténtico y de la más alta calidad. Desde lanzamientos exclusivos hasta clásicos atemporales, aquí encuentras tu destino perfecto.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
              alt="Calidad garantizada"
            />
            <Card.Body>
              <Card.Title>Calidad Garantizada</Card.Title>
              <Card.Text>
                Solo trabajamos con proveedores oficiales y verificamos cada producto para asegurar su autenticidad y durabilidad.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mt-4 mt-md-0">
          <Card className="shadow-sm">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1520975690953-51ae4ec2b4c3?auto=format&fit=crop&w=600&q=80"
              alt="Equipo experto"
            />
            <Card.Body>
              <Card.Title>Equipo Experto</Card.Title>
              <Card.Text>
                Nuestro personal está apasionado por el mundo sneaker y te asesorará para encontrar el par ideal que se adapte a tu estilo.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mt-4 mt-md-0">
          <Card className="shadow-sm">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?auto=format&fit=crop&w=600&q=80"
              alt="Cultura urbana"
            />
            <Card.Body>
              <Card.Title>Cultura Urbana</Card.Title>
              <Card.Text>
                Apoyamos la cultura local colaborando con artistas y diseñadores emergentes para promover la creatividad y autenticidad.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h3>Nuestra Visión</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Creemos que las zapatillas no son solo calzado, sino una forma de expresión personal y un símbolo cultural. Queremos que cada
            par que vendas o compres con nosotros refleje tu identidad y te haga sentir único.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SobreNosotros;
