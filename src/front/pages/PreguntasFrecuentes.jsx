import React from "react";
import { Container, Row, Col, Accordion, Image } from "react-bootstrap";

const PreguntasFrecuentes = () => {
    return (
        <Container className="py-5">
            <h1 className="mb-4 text-center">Preguntas Frecuentes (FAQ)</h1>

            <Row className="align-items-center mb-5">
                <Col md={6}>
                    <Image
                        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
                        alt="FAQ"
                        fluid
                        rounded
                    />
                </Col>
                <Col md={6} className="mt-4 mt-md-0">
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>¿Son originales los productos?</Accordion.Header>
                            <Accordion.Body>
                                Sí, todas nuestras zapatillas son 100% originales y adquiridas a través de distribuidores oficiales.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>¿Qué métodos de pago aceptan?</Accordion.Header>
                            <Accordion.Body>
                                Aceptamos Visa, Mastercard, PayPal y Apple Pay para facilitar tu compra.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>¿Cuánto tarda en llegar mi pedido?</Accordion.Header>
                            <Accordion.Body>
                                El tiempo estimado de entrega es de 3 a 7 días hábiles, dependiendo de tu ubicación.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>¿Cómo solicito una devolución?</Accordion.Header>
                            <Accordion.Body>
                                Puedes solicitar una devolución enviando un correo a{' '}
                                <a href="mailto:devoluciones@sneakpeak.com">devoluciones@sneakpeak.com</a> dentro de los primeros 14 días tras recibir tu pedido.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>¿Ofrecen envíos internacionales?</Accordion.Header>
                            <Accordion.Body>
                                Sí, realizamos envíos a varios países. Consulta la lista completa al finalizar la compra.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default PreguntasFrecuentes;
