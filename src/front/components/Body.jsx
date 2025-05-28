import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
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
  'https://media.istockphoto.com/id/175537625/es/foto/zapatillas-con-trazado-de-recorte.jpg?s=612x612&w=0&k=20&c=cglEyR9ySoQHLEVIcxz_azVGHh4KR9SkOr27Dfgf-FA=',
  'https://media.blackandwhite-ff.com/10000/2f63aa62-0a2d-4252-ba83-b704c903d13a_aj1colourways-0013-aj1banned.jpg',
  'https://assets.adidas.com/images/w_600,f_auto,q_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/Zapatilla_Forum_Low_Blanco_FY7757_01_standard.jpgs',
  'https://www.dooerssneakers.com/images/puma-zapatillas-hombre-puma-club-ii-era-yea-puntera-1000994913-1200x1200-d',
  'https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/09/16/5fad439020e84.jpeg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWCzhHcGlya0AfocE0eLFUJJXjGT4xtrv7w&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQ1Xg-lFixeae1sab0uu2jAvHkLmot_pJxLlB7Z2QdeaGrl8CoJZiyNWqIdKtu9V46fc&usqp=CAU',
];

const promotions = [
  { id: 1, name: 'Descuento 20%', points: 1000, description: '20% de descuento en tu próxima compra', code: 'SNEAK20' },
  { id: 2, name: 'Envío Gratis', points: 800, description: 'Envío gratuito en tu próxima orden', code: 'FREE2023' },
  { id: 3, name: 'Zapatilla Gratis', points: 5000, description: 'Gana un par de zapatillas gratis', code: 'FREESNEAK' },
  { id: 4, name: 'Kit Cuidado', points: 1500, description: 'Kit de cuidado para zapatillas', code: 'CLEANKIT' },
];

const Body = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [showContest, setShowContest] = useState(false);
  const [userPoints, setUserPoints] = useState(1200);
  const [showRedeemModal, setShowRedeemModal] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [email, setEmail] = useState('');
  const [codeCopied, setCodeCopied] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % sneakerImages.length
        );
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleRedeem = (promo) => {
    setSelectedPromo(promo);
    setShowRedeemModal(true);
  };

  const handleConfirmRedeem = () => {
    if (userPoints >= selectedPromo.points) {
      setUserPoints(userPoints - selectedPromo.points);
      setShowRedeemModal(false);
      setShowSuccessModal(true);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedPromo.code);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

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

      {/* Botón de concurso a ancho completo */}
      <div className="w-100 mb-4" style={{ padding: '0 15px' }}>
        <Button
          variant="btn-succes"
          size="lg"
          className="rounded-10 w-100 py-3 shadow"
          onClick={() => setShowContest(!showContest)}
          style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            border: 'none'
          }}
        >
          {showContest ? 'Ocultar Concurso' : '¡Participa en Nuestro Concurso y Gana Premios!'}
        </Button>
      </div>

      <Container fluid="lg">
        {/* Sección de concurso */}
        {showContest && (
          <Card className="mb-5 shadow-lg border-0">
            <Card.Header className="bg-primary text-white">
              <h3 className="mb-0">Club de Puntos Sneaker</h3>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={4} className="text-center mb-4 mb-md-0">
                  <div className="display-4 font-weight-bold text-warning">{userPoints}</div>
                  <div className="h5">Puntos Acumulados</div>
                  <Button variant="info" size="sm" className="mt-2 rounded-pill">
                    Cómo ganar más puntos
                  </Button>
                </Col>
                <Col md={4}>  {/* Cambiado de md={8} a md={6} (12 columnas * 0.5 = 6) */}
                  <h4 className="mb-3">Canjea tus puntos por promociones</h4>
                  <Row>
                    {promotions.map(promo => (
                      <Col key={promo.id} sm={6} className="mb-3">
                        <Card className="h-100">
                          <Card.Body>
                            <Card.Title>{promo.name}</Card.Title>
                            <Card.Text>{promo.description}</Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="badge bg-success">{promo.points} pts</span>
                              <Button
                                variant={userPoints >= promo.points ? "primary" : "secondary"}
                                size="sm"
                                disabled={userPoints < promo.points}
                                onClick={() => handleRedeem(promo)}
                              >
                                Canjear
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer className="bg-light">
              <small className="text-muted">Los puntos expiran después de 6 meses. Consulta términos y condiciones.</small>
            </Card.Footer>
          </Card>
        )}

        {/* Marcas de zapatillas */}
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
                    backgroundColor: '#e6e6fa',
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

      {/* Modal para canjear puntos */}
      <Modal show={showRedeemModal} onHide={() => setShowRedeemModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Canjear {selectedPromo?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Estás a punto de canjear <strong>{selectedPromo?.points} puntos</strong> por:</p>
          <p className="lead">{selectedPromo?.description}</p>
          <p>Te quedarán {userPoints - selectedPromo?.points} puntos después de este canje.</p>

          <Form.Group className="mb-3">
            <Form.Label>Ingresa tu email para recibir el código:</Form.Label>
            <Form.Control
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowRedeemModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleConfirmRedeem}>
            Confirmar Canje
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de éxito */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>¡Canje Exitoso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#28a745" className="bi bi-check-circle-fill mb-3" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            <h4>¡Felicidades!</h4>
            <p>Has canjeado {selectedPromo?.name} exitosamente.</p>

            <div className="alert alert-success mt-3">
              <h5 className="mb-2">Tu código de promoción:</h5>
              <div className="d-flex justify-content-center align-items-center">
                <span className="h4 font-weight-bold me-3">{selectedPromo?.code}</span>
                <Button
                  variant="outline-success"
                  size="sm"
                  onClick={copyToClipboard}
                >
                  {codeCopied ? '¡Copiado!' : 'Copiar'}
                </Button>
              </div>
            </div>

            <p className="mt-3">Hemos enviado los detalles a <strong>{email}</strong></p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowSuccessModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Body;