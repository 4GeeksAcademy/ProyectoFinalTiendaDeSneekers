import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, Button, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const ListProducts = () => {
  const [products, setProducts] = useState([]);

  const data = useParams()
  console.log(data.genero)

  useEffect (
    ()=>{
      //hacer la peticion al servidor y guardar respuesta en cambiante de estado
    },[]
  )


  return (
    <Container className="my-5">
      <h2 className="mb-4">Nuestra Colección de Sneakers</h2>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="h-100 shadow-sm">
              <Badge
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
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-muted">
                  {product.brand}
                </Card.Text>
                <Card.Text>
                  <small className="text-decoration-line-through text-muted">
                    {product.originalPrice && `$${product.originalPrice}`}
                  </small>
                  <span className="fs-5 ms-2 fw-bold text-primary">
                    ${product.price}
                  </span>
                </Card.Text>
                <Card.Text className="flex-grow-1">
                  {product.description.substring(0, 60)}...
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => onAddToCart(product)}
                  disabled={product.stock <= 0}
                  className="mt-auto"
                >
                  {product.stock > 0 ? "Añadir al carrito" : "Sin stock"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListProducts;