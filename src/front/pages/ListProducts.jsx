import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, Button, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";


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
        const response = await fetch(`http://127.0.0.1:3001/zapatillas`);

        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }

        const data = await response.json();
        setProducts(data);
        console.log(data)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Se ejecutará cada vez que cambie el género

  const handleAddToCart = async (zapatilla_id) => {
    const response = await fetch(`http://127.0.0.1:3001/add_to_cart`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ zapatilla_id, cantidad: 1, talla: 42 }),
    });
  }
  return (
    <Container className="my-5">
      <h2 className="mb-4">Nuestra Colección de Sneakers</h2>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">



        {products?.length !== 0 ?
          products.map((brand) => (
            brand.zapatillas.map((product) => (
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
                      {product.modelo.descripcion ? product.modelo.descripcion.substring(0, 60) : <h1></h1>}...
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
                  <Card.Footer className="text-end">
                    <Button variant="primary" className="w-100" onClick={() => handleAddToCart(product.id)}>
                      <FaCartArrowDown />
                      </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))
          ))
          : null}
      </Row>
    </Container>
  );
};

export default ListProducts;