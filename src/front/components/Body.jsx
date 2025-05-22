import React, { useState, useEffect } from 'react';
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

const sneakerImages = [
  'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png',
  'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2f1b8e5a8f0d4f2a8e1eaf8e00e5c3a9_9366/Zapatillas_Forum_Low_Blanco_GW2528_01_standard.jpg',
  'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/376701/01/sv01/fnd/PNA/fmt/png/SUEDE-Classic-XXI-Unisex-Sneakers',
  'https://images.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwbb38a1a2/images/a_107/M9160_A_107X1.jpg',
  'https://images.vans.com/is/image/Vans/UUK24I-HERO?$583x583$',
  'https://www.asics.com/dw/image/v2/BBWQ_PRD/on/demandware.static/-/Sites-asics-master/default/dw0c5c5c6a/images/1011B458_400_SR_RT_GLB?sw=580&sh=580&sm=fit&sfrm=png',
  'https://images.crocs.com/images/t_thumb_squared,f_auto,q_auto/products/206750_4K8_ALT100/crocs',
];

const Body = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % sneakerImages.length
        );
        setFade(true);
      }, 500); // Half of the transition time
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        paddingTop: '30px',
        paddingBottom: '30px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background images with fade effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${sneakerImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: fade ? 0.2 : 0,
          transition: 'opacity 1s ease-in-out',
          zIndex: -1,
          filter: 'blur(2px)',
        }}
      />
      
      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(-45deg, rgba(194, 233, 251, 0.7), rgba(161, 196, 253, 0.7), rgba(251, 194, 235, 0.7), rgba(249, 249, 249, 0.7))',
          backgroundSize: '400% 400%',
          animation: 'gradientBG 15s ease infinite',
          zIndex: -1,
        }}
      />
      
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