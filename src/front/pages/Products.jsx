// src/components/Products.js
import React, { useState } from 'react';
import ListProducts from './ListProducts';

const Products = () => {
 

  const handleAddToCart = (product) => {
    // Aquí podrías manejar la lógica para agregar al carrito
    console.log(`Producto añadido al carrito: ${product.name}`);
    // Opcionalmente, podrías actualizar el stock
    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === product.id
          ? { ...p, stock: p.stock - 1 }
          : p
      )
    );
  };

  return (
    <div>
      <ListProducts products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Products;
