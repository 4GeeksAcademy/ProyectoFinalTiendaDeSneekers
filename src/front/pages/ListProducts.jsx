import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, Button, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const data = useParams()
  console.log(data.genero)



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Aquí deberías reemplazar la URL con tu endpoint real
        const response = await fetch(`https://ominous-couscous-x5vj6w7x54vv2p79r-3001.app.github.dev/zapatillas`);

        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }

        const data = await response.json();
        setProducts(data.zapatillas);
        console.log(data)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Se ejecutará cada vez que cambie el género


  return (
    <Container className="my-5">
      <h2 className="mb-4">Nuestra Colección de Sneakers</h2>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">



        { products?.length !==0 ?
        
        products.map((product) => (
          <Col key={product.id}>
            <Card className="h-100 shadow-sm">
             {/* <Badge
                bg={product.stock > 0 ? "success" : "danger"}
                className="position-absolute end-0 mt-2 me-2"
              >
                {product.stock > 0 ? "Disponible" : "Agotado"}
              </Badge>
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              /> */}
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.modelo.nombre}</Card.Title>
                <Card.Text className="text-muted">
                  {product.modelo.oferta}
                </Card.Text>
                <Card.Text>
                  <span className="fs-5 ms-2 fw-bold text-primary">
                    ${product.modelo.precio}
                  </span>
                </Card.Text>
                <Card.Text className="flex-grow-1">
                  {product.modelo.descripcion.substring(0, 60)}...
                </Card.Text>
                {/*<Button
                  variant="primary"
                  onClick={() => onAddToCart(product)}
                  disabled={product.stock <= 0}
                  className="mt-auto"
                >
                  {product.stock > 0 ? "Añadir al carrito" : "Sin stock"}
                </Button>*/}
              </Card.Body>
            </Card>
          </Col>
        )):null}
      </Row>
    </Container>
  );
};

export default ListProducts;