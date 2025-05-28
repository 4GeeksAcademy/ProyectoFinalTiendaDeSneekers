import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, Button, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import ProductCard from '../components/productCard';
import { fetchProducts } from '../../services/fetchs';
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useAuth } from '../hooks/authContext';

const ListProducts = () => {
  const { genero } = useParams(); // Obtener el género de la URL
  const { user, addToCart } = useAuth();
  const { store, dispatch } = useGlobalReducer();
  
  const onAddToCart = async (zapatilla_id, talla, cantidad) => {
    if (!talla) {
      alert("Por favor, selecciona una talla antes de añadir al carrito.");
      return;
    }
    console.log("Añadiendo al carrito", zapatilla_id, talla, cantidad);
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}add_to_cart`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ zapatilla_id, cantidad, talla }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log("Producto añadido al carrito:", data.zapatilla);
      addToCart(data.zapatilla);
    } else {
      console.error("Error al añadir al carrito", response.statusText);
    }
  }

  useEffect(() => {
    fetchProducts(dispatch, genero); // Pasar el género a fetchProducts
  }, [dispatch, genero]); // Se ejecutará cuando cambie el género

  const { products } = store;

  return (
    <Container className="my-5">
      <h2 className="mb-4">
        {genero === 'man' ? 'Hombre' : 
         genero === 'mujer' ? 'Mujer' : 
         genero === 'ninos' ? 'Niños' : 
         'Nuestra Colección de Sneakers'}
      </h2>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {products?.length !== 0 ?
          products.map((brand) => (
            brand.zapatillas.map((product) => (
              <Col key={product.id}>
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </Col>
            ))
          ))
          : <p>No hay productos disponibles en esta categoría.</p>}
      </Row>
    </Container>
  );
};

export default ListProducts;