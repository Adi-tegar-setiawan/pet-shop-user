// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const products = [
  { id: 1, name: "Whiskas", price: 10000, description: "Cat food with real chicken", stock: 10, image: "./images/product1.png" },
  { id: 2, name: "Whiskas", price: 17000, description: "Dry cat food", stock: 8, image: "./images/product2.png" },
  { id: 3, name: "Felix", price: 15000, description: "Tasty cat food", stock: 12, image: "./images/product3.png" },
  { id: 4, name: "Cesar Can", price: 13000, description: "Dog food with real meat", stock: 5, image: "./images/product4.png" },
  { id: 5, name: "Cesar Can", price: 13000, description: "Dog food with real meat", stock: 5, image: "./images/product5.png" },
  { id: 6, name: "Cesar Can", price: 13000, description: "Dog food with real meat", stock: 5, image: "./images/product5.png" },
  { id: 7, name: "Cesar Can", price: 13000, description: "Dog food with real meat", stock: 5, image: "./images/product7.png" },
  { id: 8, name: "Cesar Can", price: 13000, description: "Dog food with real meat", stock: 5, image: "./images/product7.png" },
  { id: 9, name: "Cesar Can", price: 13000, description: "Dog food with real meat", stock: 5, image: "./images/product8.png" },
  { id: 10, name: "Cesar Can", price: 13000, description: "Dog food with real meat", stock: 5, image: "./images/product8.png" },
  { id: 11, name: "Cesar Can", price: 13000, description: "Dog food with real meat", stock: 5, image: "./images/product6.png" },
  { id: 12, name: "Cesar Can", price: 13000, description: "Dog food with real meat", stock: 5, image: "./images/product6.png" },
  { id: 13, name: "Cesar Can", price: 13000, description: "Dog food with real meat", stock: 5, image: "./images/product1.png" },
  { id: 14, name: "Cesar Can", price: 13000, description: "Dog food with real meat", stock: 5, image: "./images/product3.png" },
  { id: 15, name: "Cesar Can", price: 13000, description: "Dog food with real meat", stock: 5, image: "./images/product7.png" },
  { id: 16, name: "Cesar Can", price: 13000, description: "Dog food with real meat", stock: 5, image: "./images/product2.png" },
];

const Home = () => {
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
