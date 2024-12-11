import React from 'react';
import GoodsCard from './GoodsCard';

const Gallery = () => {
  const products = [
    {
      id: 1,
      image: 'apple.png',
      name: 'Яблуко',
      price: 100,
    },
    {
      id: 2,
      image: 'plum.png',
      name: 'Слива',
      price: 150,
    },
    {
      id: 3,
      image: 'pear.png',
      name: 'Груша',
      price: 200,
    },
    {
      id: 4,
      image: 'cherry.png',
      name: 'Вишня',
      price: 250,
    },
    {
      id: 5,
      image: 'blueberry.png',
      name: 'Лохина',
      price: 300,
    },
    {
      id: 6,
      image: 'kiwi.png',
      name: 'Ківі',
      price: 350,
    },
  ];

  return (
    <div className="gallery">
      {products.map(product => (
        <GoodsCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default Gallery;
