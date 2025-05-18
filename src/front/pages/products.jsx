// src/components/Products.js
import React, { useState } from 'react';
import ListProducts from './ListProducts';

const Products = () => {
  const [products, setProducts] = useState([])
    {
      id: 1,
      name: 'Nike Air Max 90',
      brand: 'Nike',
      price: 120,
      originalPrice: 150,
      description: 'Zapatillas icónicas con gran amortiguación y estilo retro.',
      image: 'https://via.placeholder.com/300x200?text=Nike+Air+Max+90'//cambiar
      stock: 5,
    },
    {
      id: 2,
      name: 'Adidas Ultraboost',
      brand: 'Adidas',
      price: 140,
      originalPrice: 180,
      description: 'Máximo confort y diseño moderno para runners exigentes.',
      image: 'https://via.placeholder.com/300x200?text=Adidas+Ultraboost'//cambiar
      stock: 0,
    },
    {
      id: 3,
      name: 'Puma RS-X',
      brand: 'Puma',
      price: 110,
      originalPrice: null,
      description: 'Diseño llamativo con un toque urbano para destacar.',
      image: 'https://via.placeholder.com/300x200?text=Puma+RS-X'//cambiar
      stock: 3,
    },
  ]);

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
