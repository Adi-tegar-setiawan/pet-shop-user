// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ products }) => {
  const displayedProducts = products.slice(0, 16);

  return (
    <div className="home">
      <div className="banner">
        <img src="./images/banner.jpg" alt="Pet Shop Banner" />
        <h1>Welcome to My Pet Shop</h1>
        <p>Your one-stop shop for pet food and accessories!</p>
      </div>

      <div className="product-list product-container">
        {displayedProducts.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>RP: {product.price}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
