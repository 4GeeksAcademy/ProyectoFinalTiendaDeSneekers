import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container, Button, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import ProductCard from '../components/productCard';


import { fetchProducts } from '../../services/fetchs';
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useAuth } from '../hooks/authContext';
const ListProducts = () => {

  const { store, dispatch } = useGlobalReducer();
  const [searchItem, setSearchItem] = useState(null);
  const { genero } = useParams()
  useEffect(() => {
    
    //AQUI DEBEMOS ENVIAR A LA FUNCION DEL GENERO SELECCIONADO QUE OBTENEMOS DE DATA.GENERO (MUJER,HOMBRE O NIÑO)
    if (genero) {
      fetchProducts(genero, dispatch);
    }

  }, [genero || store]); // Se ejecutará cada vez que cambie el género o el store

  const { products } = store
  return (
    <Container className="my-5">
      <h2 className="mb-4">Nuestra Colección de Sneakers</h2>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">

        {products?.length !== 0 ?
          products.map((brand) => (
            brand.zapatillas.map((product) => (
              <Col key={product.id}>
                <ProductCard marca={brand} product={ product } gender={genero} />
              </Col>
            ))
          ))
          : null}
      </Row>
    </Container>
  );
};

export default ListProducts;