import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const brands = [
  { name: 'Nike (Jordan)', image: 'https://cdn.worldvectorlogo.com/logos/jordan-air.svg', url: 'https://www.nike.com/jordan' },
  { name: 'Adidas', image: 'https://ams3.digitaloceanspaces.com/graffica/2022/12/Adidas-Logo-1971-1024x576.jpeg', url: 'https://www.adidas.com' },
  { name: 'Reebok', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Reebok_2019_logo.svg/2560px-Reebok_2019_logo.svg.png', url: 'https://www.reebok.com' },
  { name: 'Puma', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNOhHZ-0c3De3DFuwuosHkDnJRDwhDb-tLdw&s', url: 'https://us.puma.com' },
  { name: 'Converse', image: 'https://1000marcas.net/wp-content/uploads/2020/01/Converse-Logo.png', url: 'https://www.converse.com' },
  { name: 'Vans', image: 'https://cdn.worldvectorlogo.com/logos/vans-5.svg', url: 'https://www.vans.com' },
  { name: 'Asics', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFfbBl9qSo9F6ru_oLjr3eL9ihfcdWYJxufw&s', url: 'https://www.asics.com' },
  { name: 'Crocs', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LP4BbMw9CZFrmP7PXSmAAor0I8c32unBNA&s', url: 'https://www.crocs.com' },
];

const Body = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        paddingTop: '30px',
        paddingBottom: '30px',
        background: 'linear-gradient(-45deg, #c2e9fb, #a1c4fd, #fbc2eb, #f9f9f9)',
        backgroundSize: '400% 400%',
        animation: 'gradientBG 15s ease infinite',
      }}
    >
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <Container fluid="lg">
        <Row className="g-4">
          {brands.map((brand, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 shadow-lg border-0 d-flex flex-column justify-content-between text-center">
                <Card.Img
                  variant="top"
                  src={brand.image}
                  style={{
                    height: '220px',
                    objectFit: 'contain',
                    padding: '30px',
                    backgroundColor: '#f8f9fa',
                  }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fs-5">{brand.name}</Card.Title>
                  </div>
                  <div className="mt-3">
                    <Button
                      variant="dark"
                      href={brand.url}
                      target="_blank"
                      className="rounded-pill px-4 py-2"
                    >
                      Ir a sitio
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Body;
