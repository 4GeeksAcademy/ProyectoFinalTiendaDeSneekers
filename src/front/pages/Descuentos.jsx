import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, Button, Badge } from 'react-bootstrap';

// Simulación de función para añadir al carrito
const onAddToCart = (producto) => {
    console.log('Añadido al carrito:', producto);
};

// Datos de ejemplo (mock) de zapatillas con descuento
const mockDescuentos = [
    {
        id: 1,
        nombre: 'Nike Air Max 270',
        marca: 'Nike',
        descripcion: 'Comodidad y estilo para todos los días.',
        precio: 89.99,
        img: 'https://www.basketballemotion.com/imagesarticulos/128187/750/zapatilla-nike-air-max-270-negro-0.jpg'
    },
    {
        id: 2,
        nombre: 'Adidas Ultraboost',
        marca: 'Adidas',
        descripcion: 'Energía infinita con cada paso.',
        precio: 99.99,
        img: 'https://www.tradeinn.com/f/13896/138961643/adidas-zapatillas-running-ultraboost-22-goretex.webp'
    },
    {
        id: 3,
        nombre: 'Puma RS-X',
        marca: 'Puma',
        descripcion: 'Diseño futurista con gran amortiguación.',
        precio: 74.50,
        img: 'https://img01.ztat.net/article/spp-media-p1/44808b57bb5b4b7b83a08f4d89d5f60e/7f333c7af216419cb368ea7f2312464a.jpg?imwidth=1800&filter=packshot'
    },
    {
        id: 4,
        nombre: 'New Balance 574',
        marca: 'New Balance',
        descripcion: 'Icónico y clásico para uso diario.',
        precio: 69.95,
        img: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202410/01/00182869629475____14__1200x1200.jpg'
    },
];

function Descuentos() {
    const [modelos, setModelos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setModelos(mockDescuentos);
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) return <Container className="py-5"><h4>Cargando productos con descuento...</h4></Container>;
    if (modelos.length === 0) return <Container className="py-5"><h4>No hay productos con descuento.</h4></Container>;

    return (
        <div className="bg-light py-5">
            <Container>
                <h2 className="mb-4 text-danger text-center">Zapatillas en Oferta</h2>
                <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                    {modelos.map(modelo => (
                        <Col key={modelo.id}>
                            <Card className="h-100 shadow-sm">
                                <Badge bg="warning" className="position-absolute end-0 mt-2 me-2 text-dark">
                                    Oferta
                                </Badge>
                                <Card.Img
                                    variant="top"
                                    src={modelo.img}
                                    alt={modelo.nombre}
                                    className="img-fluid"
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
        </div>
    );
}

export default Descuentos;
