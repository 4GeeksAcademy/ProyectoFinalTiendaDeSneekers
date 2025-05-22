import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap';

const EnviosDevoluciones = () => {
    return (
        <Container className="my-5">
            <h1 className="mb-4">Envíos y Devoluciones</h1>

            <Row className="mb-5 align-items-center">
                <Col md={6}>
                    <Image
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                        alt="Proceso de envío"
                        fluid
                        rounded
                    />
                </Col>
                <Col md={6}>
                    <h2>Envíos</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        En SneakPeaks nos esforzamos para que tu pedido llegue rápido y seguro. Ofrecemos envíos nacionales e internacionales,
                        con diferentes opciones para adaptarnos a tus necesidades.
                    </p>
                    <ListGroup variant="flush" style={{ fontSize: '1.05rem' }}>
                        <ListGroup.Item><strong>Envío estándar (España):</strong> 4,99 € - 3 a 7 días hábiles</ListGroup.Item>
                        <ListGroup.Item><strong>Envío exprés:</strong> 9,99 € - 1 a 3 días hábiles</ListGroup.Item>
                        <ListGroup.Item><strong>Envío internacional:</strong> desde 14,99 € - tiempos varían según país</ListGroup.Item>
                    </ListGroup>
                    <p className="mt-3">
                        Todos los pedidos son procesados en 24-48 horas. Una vez enviado, recibirás un correo con el número de seguimiento.
                    </p>
                </Col>
            </Row>

            <Row className="align-items-center">
                <Col md={6} className="order-md-2">
                    <Image
                        src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
                        alt="Devolución de producto"
                        fluid
                        rounded
                    />
                </Col>
                <Col md={6} className="order-md-1">
                    <h2>Devoluciones</h2>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Queremos que estés 100% satisfecho con tu compra. Si necesitas devolver un producto, dispones de 14 días desde la recepción.
                        El artículo debe estar sin usar, en perfecto estado y con su embalaje original.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Para gestionar una devolución, escribe a{' '}
                        <a href="mailto:devoluciones@sneakpeak.com" style={{ textDecoration: 'underline' }}>
                            devoluciones@sneakpeak.com
                        </a>{' '}
                        con tu número de pedido y motivo. Nuestro equipo te guiará en el proceso y te proporcionará la etiqueta de devolución.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        Los reembolsos se procesan en un plazo de 7 días hábiles tras recibir el producto.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default EnviosDevoluciones;
