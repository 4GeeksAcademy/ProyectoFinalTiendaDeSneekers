import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, Button, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import ProductCard from '../components/productCard';


import { fetchProducts } from '../../services/fetchs';
import useGlobalReducer from "../hooks/useGlobalReducer";
const ListProducts = () => {

  const data = useParams()

  const { store, dispatch } = useGlobalReducer();

  const onAddToCart = async (zapatilla_id, talla, cantidad) => {
    console.log("Añadiendo al carrito", zapatilla_id, talla, cantidad);
    const response = await fetch(`http://127.0.0.1:3001/add_to_cart`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ zapatilla_id, cantidad, talla }),
    });
  }

  useEffect(() => {



    fetchProducts(dispatch);
  }, [dispatch]); // Se ejecutará cada vez que cambie el género

  const { products } = store
  console.log(products)
  return (
    <Container className="my-5">
      <h2 className="mb-4">Nuestra Colección de Sneakers</h2>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">



        {products?.length !== 0 ?
          products.map((brand) => (
            brand.zapatillas.map((product) => (
              <Col key={product.id}>
                <ProductCard product={product} onAddToCart={onAddToCart}/>
              </Col>
            ))
          ))
          : null}
      </Row>
    </Container>
  );
};

export default ListProducts;