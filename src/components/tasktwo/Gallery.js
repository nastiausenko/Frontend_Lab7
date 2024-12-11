import React from 'react';
import GoodsCard from './GoodsCard';
import products from './products.json'

const Gallery = () => {

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
