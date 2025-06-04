import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, Button, Badge } from 'react-bootstrap';

const onAddToCart = (producto) => {
    console.log('Añadido al carrito:', producto);
};

const mockDescuentos = [
    {
        id: 1,
        nombre: 'Nike Air Max 270',
        marca: 'Nike',
        descripcion: 'Comodidad y estilo para todos los días.',
        precio: 89.99,
        precioOriginal: 129.99,
        img: 'https://www.basketballemotion.com/imagesarticulos/128187/750/zapatilla-nike-air-max-270-negro-0.jpg'
    },
    {
        id: 2,
        nombre: 'Adidas Ultraboost 22 Goretex',
        marca: 'Adidas',
        descripcion: 'Energía infinita con cada paso.',
        precio: 99.99,
        precioOriginal: 149.99,
        img: 'https://www.tradeinn.com/f/13896/138961643/adidas-zapatillas-running-ultraboost-22-goretex.webp'
    },
    {
        id: 3,
        nombre: 'Puma RS-X',
        marca: 'Puma',
        descripcion: 'Diseño futurista con gran amortiguación.',
        precio: 74.50,
        precioOriginal: 110.00,
        img: 'https://img01.ztat.net/article/spp-media-p1/44808b57bb5b4b7b83a08f4d89d5f60e/7f333c7af216419cb368ea7f2312464a.jpg?imwidth=1800&filter=packshot'
    },
    {
        id: 4,
        nombre: 'New Balance 574',
        marca: 'New Balance',
        descripcion: 'Icónico y clásico para uso diario.',
        precio: 69.95,
        precioOriginal: 99.95,
        img: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202410/01/00182869629475____14__1200x1200.jpg'
    },
    {
        id: 5,
        nombre: 'Asics Gel-Kayano 28',
        marca: 'Asics',
        descripcion: 'Soporte premium para corredores.',
        precio: 94.99,
        precioOriginal: 139.99,
        img: 'https://cdn.sneakers123.com/release/426622/asics-asics-gel-kayano-28-french-blue-1011b189-400.jpg'
    },
    {
        id: 6,
        nombre: 'Nike React Infinity Run',
        marca: 'Nike',
        descripcion: 'Amortiguación suave y soporte flexible.',
        precio: 84.99,
        precioOriginal: 129.99,
        img: 'https://keeshoes.es/a/ale/auction_image/image1_127165.s2000/zapatillas-de-running-nike-react-infinity-run-flyknit-2-m-ct2357-009-negro-2000x2000.jpeg?_=1653317412.6614271'
    },
    {
        id: 7,
        nombre: 'Adidas ZX 2K Boost',
        marca: 'Adidas',
        descripcion: 'Estilo retro con tecnología moderna.',
        precio: 79.99,
        precioOriginal: 119.99,
        img: 'https://www.footkorner.com/cdn/shop/files/footkorner-adidas-zx-2k-boost-blanc-GZ7741-100_3.png?v=1689847599'
    },
    {
        id: 8,
        nombre: 'Under Armour HOVR Phantom',
        marca: 'Under Armour',
        descripcion: 'Conectividad y confort en una sola zapatilla.',
        precio: 88.00,
        precioOriginal: 139.99,
        img: 'https://www.shooos.es/media/catalog/product/cache/14/image/1350x778/9df78eab33525d08d6e5fb8d27136e95/3/0/3027154-1003.jpg'
    },
    {
        id: 9,
        nombre: 'Reebok Nano X1',
        marca: 'Reebok',
        descripcion: 'Versatilidad para entrenamiento diario.',
        precio: 69.99,
        precioOriginal: 110.00,
        img: 'https://wodbox.es/16776-medium_default/reebok-nano-x1-froning.jpg'
    },
    {
        id: 10,
        nombre: 'Adidas adios pro 4 yellow',
        marca: 'Adidas',
        descripcion: 'Rendimiento y velocidad optimizados.',
        precio: 170.95,
        precioOriginal: 250.00,
        img: 'https://www.runningxpert.com/media/catalog/product/cache/e1bfa30f5f000aa573b2ee969a7a0fde/j/r/jr6364_1_footwear_photography_side_lateral_center_view_white.jpg'
    },
    {
        id: 11,
        nombre: 'Adidas Pharrel williams 4',
        marca: 'Adidas',
        descripcion: 'Transiciones suaves y soporte duradero.',
        precio: 89.00,
        precioOriginal: 129.00,
        img: 'https://www.shooos.es/media/catalog/product/cache/14/image/1350x778/9df78eab33525d08d6e5fb8d27136e95/a/d/adidas-originals-x-pharrell-williams-tennis-hu-b41884-4.jpg'
    },
    {
        id: 12,
        nombre: 'Crocs cuchau',
        marca: 'Crocs',
        descripcion: 'Ideal para senderos y terrenos difíciles.',
        precio: 94.99,
        precioOriginal: 144.99,
        img: 'https://m.media-amazon.com/images/I/61bEyqdB6yL._AC_UY900_.jpg'
    },
    {
        id: 13,
        nombre: 'Nike ZoomX Vaporfly',
        marca: 'Nike',
        descripcion: 'Diseñada para competir a alta velocidad.',
        precio: 129.99,
        precioOriginal: 249.99,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkk_29fIR1beES0slXCHmno6XC0DylB9wbA&s'
    },
    {
        id: 14,
        nombre: 'Adidas Adizero Boston 11',
        marca: 'Adidas',
        descripcion: 'Diseño ligero para largas distancias.',
        precio: 89.95,
        precioOriginal: 149.95,
        img: 'https://www.lepape.com/media/catalog/product/cache/473b5c523945596881637071664ad3a7/m/a/main_5037050d4b1f4937b048af1f00bcd4b9_9366_26e4.png'
    },
    {
        id: 15,
        nombre: 'Vans Old school pro',
        marca: 'Vans',
        descripcion: 'Gran amortiguación para distancias largas.',
        precio: 99.95,
        precioOriginal: 139.95,
        img: 'https://www.bdskateco.com/profesionales/7618-medium_default/vans-zapatillas-old-skool-pro-black-gum-.jpg'
    },
    {
        id: 16,
        nombre: 'Converse Magic jhonson',
        marca: 'Converse',
        descripcion: 'Pisada suave con cada zancada.',
        precio: 89.00,
        precioOriginal: 129.00,
        img: 'https://preview.redd.it/k8mlql5g9qs41.jpg?width=640&crop=smart&auto=webp&s=6f5964913cf7091f05d21051a3468cc8aea6988f'
    }
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
                                            ${modelo.precio.toFixed(2)}
                                        </span>
                                        <span className="text-muted text-decoration-line-through">
                                            ${modelo.precioOriginal.toFixed(2)}
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
