import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, Button, Badge, Form } from 'react-bootstrap';

const onAddToCart = (producto, talla) => {
    console.log('Añadido al carrito:', { ...producto, talla });
};

const allSizes = [36, 38, 40, 42, 44, 46];

function getRandomSizes() {
    const shuffled = [...allSizes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3).sort((a, b) => a - b);
}

const mockNikeModelos = [
    {
        id: 1,
        nombre: 'Nike Air Max 270',
        descripcion: 'Comodidad y estilo para todos los días.',
        precio: 89.99,
        precioOriginal: 129.99,
        img: 'https://www.basketballemotion.com/imagesarticulos/128187/750/zapatilla-nike-air-max-270-negro-0.jpg'
    },
    {
        id: 2,
        nombre: 'Nike React Infinity Run',
        descripcion: 'Amortiguación suave y soporte flexible.',
        precio: 84.99,
        precioOriginal: 129.99,
        img: 'https://keeshoes.es/a/ale/auction_image/image1_127165.s2000/zapatillas-de-running-nike-react-infinity-run-flyknit-2-m-ct2357-009-negro-2000x2000.jpeg?_=1653317412.6614271'
    },
    {
        id: 3,
        nombre: 'Nike ZoomX Vaporfly',
        descripcion: 'Diseñada para competir a alta velocidad.',
        precio: 129.99,
        precioOriginal: 249.99,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkk_29fIR1beES0slXCHmno6XC0DylB9wbA&s'
    },
    {
        id: 4,
        nombre: 'Nike Air Zoom Pegasus 40',
        descripcion: 'Versátil para entrenamiento diario.',
        precio: 99.99,
        precioOriginal: 139.99,
        img: 'https://www.roadrunningreview.com/Nike-Pegasus-40_1920_1_101130.jpg'
    },
    {
        id: 5,
        nombre: 'Nike Dunk',
        descripcion: 'Estilo urbano y moderno.',
        precio: 89.00,
        precioOriginal: 119.00,
        img: 'https://images.stockx.com/images/Nike-Dunk-Low-Black-White-2021-Product.jpg'
    },
    {
        id: 6,
        nombre: 'Nike Blazer Mid 77',
        descripcion: 'Diseño clásico con toque retro.',
        precio: 79.95,
        precioOriginal: 109.95,
        img: 'https://www.basketballemotion.com/imagesarticulos/186737/grandes/zapatilla-nike-blazer-mid-77-pro-club-white-black-bone-summit-white-beach-sail-0.webp'
    },
    {
        id: 7,
        nombre: 'Nike Air Force 1',
        descripcion: 'Leyenda de las calles.',
        precio: 94.99,
        precioOriginal: 124.99,
        img: 'https://www.courir.es/dw/image/v2/BCCL_PRD/on/demandware.static/-/Sites-master-catalog-courir/default/dw6496bc3a/images/hi-res/001474382_102.png?sw=450&sh=450&sm=fit'
    },
    {
        id: 8,
        nombre: 'Nike Free Run 5.0',
        descripcion: 'Naturalidad y flexibilidad al correr.',
        precio: 74.99,
        precioOriginal: 104.99,
        img: 'https://photo3.i-run.fr/nike-free-rn-5-0-m-destockage-304358-1-fz.jpg'
    },
    {
        id: 9,
        nombre: 'Nike Metcon 8',
        descripcion: 'Zapatilla de alto rendimiento para entrenamiento.',
        precio: 119.99,
        precioOriginal: 149.99,
        img: 'https://photo1.i-run.fr/nike-metcon-8-m-chaussures-homme-603702-1-fz.jpg'
    },
    {
        id: 10,
        nombre: 'Nike Air Huarache',
        descripcion: 'Comodidad y diseño llamativo.',
        precio: 89.95,
        precioOriginal: 119.95,
        img: 'https://www.thesneakerone.com/10823-large_default/NIKE-AIR-HUARACHE-RUN-SE-852628-301.jpg'
    },
    {
        id: 11,
        nombre: 'Nike Air Max 90',
        descripcion: 'Estilo clásico, amortiguación moderna.',
        precio: 99.95,
        precioOriginal: 139.95,
        img: 'https://img01.ztat.net/article/spp-media-p1/23366a346f3949cab277e641e1e4da4d/7edafb71205c4f3392bbdf18f7733fe3.jpg?imwidth=1800&filter=packshot'
    },
    {
        id: 12,
        nombre: 'Nike Air Max Plus',
        descripcion: 'Diseño agresivo y cómodo.',
        precio: 119.95,
        precioOriginal: 159.95,
        img: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/57e36f71-e64d-4a1f-87ed-a0ae1bba4341/W+AIR+MAX+PLUS.png'
    },
    {
        id: 13,
        nombre: 'Nike Renew Ride 3',
        descripcion: 'Ligereza y confort.',
        precio: 59.99,
        precioOriginal: 89.99,
        img: 'https://www.deportestrisport.com/uploads/photo/image/30876/A09900_q3CgPbkn.JPG'
    },
    {
        id: 14,
        nombre: 'Nike Air Max 97',
        descripcion: 'Inspiradas en trenes bala japoneses.',
        precio: 139.99,
        precioOriginal: 189.99,
        img: 'https://photos6.spartoo.es/photos/193/19342162/19342162_1200_A.jpg'
    },
    {
        id: 15,
        nombre: 'Nike Wildhorse 7',
        descripcion: 'Ideal para trail running.',
        precio: 99.95,
        precioOriginal: 139.95,
        img: 'https://www.running-point.es/dw/image/v2/BBDP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1e9919a4/images/004/160/16755000_0_1.jpg?q=80&sw=2000'
    },
    {
        id: 16,
        nombre: 'Nike Revolution 6',
        descripcion: 'Perfectas para entrenamientos diarios.',
        precio: 54.95,
        precioOriginal: 74.95,
        img: 'https://img.eobuwie.cloud/eob_product_512w_512h(f/4/7/f/f47f549e0a69430b5376b68ab221e235d074fd67_22_0195242835265_rz.jpg,jpg)/zapatos-nike-revolution-6-nn-dc3728-003-black-white-iron-grey.jpg'
    }
];

function Descuentos() {
    const [modelos, setModelos] = useState([]);
    const [tallasSeleccionadas, setTallasSeleccionadas] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const modelosConTallas = mockNikeModelos.map(m => ({
            ...m,
            marca: 'Nike',
            tallasDisponibles: getRandomSizes()
        }));
        setTimeout(() => {
            setModelos(modelosConTallas);
            setLoading(false);
        }, 1000);
    }, []);

    const handleTallaChange = (productoId, talla) => {
        setTallasSeleccionadas(prev => ({
            ...prev,
            [productoId]: talla
        }));
    };

    if (loading) return <Container className="py-5"><h4>Cargando productos con descuento...</h4></Container>;
    if (modelos.length === 0) return <Container className="py-5"><h4>No hay productos con descuento.</h4></Container>;

    return (
        <div className="bg-light py-5">
            <Container>
                <h2 className="mb-4 text-danger text-center">Zapatillas Nike en Oferta</h2>
                <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                    {modelos.map(modelo => (
                        <Col key={modelo.id}>
                            <Card className="h-100 shadow-sm position-relative">
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
                                        <span className="fs-5 fw-bold text-danger me-2">
                                            €{modelo.precio.toFixed(2)}
                                        </span>
                                        <span className="text-muted text-decoration-line-through">
                                            €{modelo.precioOriginal.toFixed(2)}
                                        </span>
                                    </Card.Text>
                                    <Card.Text>{modelo.descripcion?.substring(0, 60)}...</Card.Text>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Talla:</Form.Label>
                                        <Form.Select
                                            value={tallasSeleccionadas[modelo.id] || ''}
                                            onChange={e => handleTallaChange(modelo.id, e.target.value)}
                                        >
                                            <option value="">Selecciona una talla</option>
                                            {modelo.tallasDisponibles.map(t => (
                                                <option key={t} value={t}>{t}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>

                                    <Button
                                        variant="danger"
                                        className="mt-auto"
                                        disabled={!tallasSeleccionadas[modelo.id]}
                                        onClick={() => onAddToCart(modelo, tallasSeleccionadas[modelo.id])}
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
