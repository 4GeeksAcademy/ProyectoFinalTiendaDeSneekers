import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, Button, Badge } from 'react-bootstrap';

// Simulación de función para añadir al carrito (reemplázala con la real si la tienes)
const onAddToCart = (producto) => {
    console.log('Añadido al carrito:', producto);
};

function Descuentos() {
    const [modelos, setModelos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDescuentos = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:5000/api/descuentos'); // Reemplaza con tu endpoint real
                if (!response.ok) {
                    throw new Error('Error al obtener los modelos en oferta');
                }
                const data = await response.json();
                setModelos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDescuentos();
    }, []);

    if (loading) return <Container className="my-5"><h4>Cargando productos con descuento...</h4></Container>;
    if (error) return <Container className="my-5"><h4>Error: {error}</h4></Container>;
    if (modelos.length === 0) return <Container className="my-5"><h4>No hay productos con descuento.</h4></Container>;

    return (
        <Container className="my-5">
            <h2 className="mb-4 text-danger">Zapatillas en Oferta</h2>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {modelos.map(modelo => (
                    <Col key={modelo.id}>
                        <Card className="h-100 shadow-sm border-danger">
                            <Badge bg="warning" className="position-absolute end-0 mt-2 me-2 text-dark">
                                Oferta
                            </Badge>
                            <Card.Img
                                variant="top"
                                src={modelo.img}
                                alt={modelo.nombre}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{modelo.nombre}</Card.Title>
                                <Card.Text className="text-muted">{modelo.marca}</Card.Text>
                                <Card.Text>
                                    <span className="fs-5 fw-bold text-danger">
                                        ${modelo.precio}
                                    </span>
                                </Card.Text>
                                <Card.Text className="flex-grow-1">
                                    {modelo.descripcion?.substring(0, 60)}...
                                </Card.Text>
                                <Button
                                    variant="danger"
                                    onClick={() => onAddToCart(modelo)}
                                    className="mt-auto"
                                >
                                    Añadir al carrito
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Descuentos;
