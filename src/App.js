// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import CartPage from './components/CartPage';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Whiskas', price: 50000, stock: 10, description: 'Dog food with high nutrients', image: '/images/product1.png' },
    { id: 2, name: 'Cat Toy', price: 15000, stock: 20, description: 'Fun toy for your cat', image: '/images/product2.png' },
    { id: 3, name: 'Fish Tank ', price: 30000, stock: 15, description: 'Keeps your fish tank clean', image: '/images/product13.jpg' },
    { id: 4, name: 'Fish Tank', price: 30000, stock: 15, description: 'Keeps your fish tank clean', image: '/images/product4.jpg' },
    { id: 5, name: 'Fish Tank', price: 30000, stock: 15, description: 'Keeps your fish tank clean', image: '/images/product7.png' },
    { id: 6, name: 'Fish Tank ', price: 30000, stock: 15, description: 'Keeps your fish tank clean', image: '/images/product11.jpg' },
    { id: 7, name: 'Fish Tank ', price: 30000, stock: 15, description: 'Keeps your fish tank clean', image: '/images/product9.jpg' },
    { id: 8, name: 'Fish Tank ', price: 30000, stock: 15, description: 'Keeps your fish tank clean', image: '/images/pupy.jpg' },
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    address: '',
    gender: '',
    profileImage: '/images/profil.jpg',  // Default profile image
  });

  const addToCart = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId && product.stock > 0) {
        return { ...product, stock: product.stock - 1 };
      }
      return product;
    });

    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd && productToAdd.stock > 0) {
      const existingCartItem = cartItems.find((item) => item.id === productId);
      let updatedCart;

      if (existingCartItem) {
        updatedCart = cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...cartItems, { ...productToAdd, quantity: 1 }];
      }

      setProducts(updatedProducts);
      setCartItems(updatedCart);
    } else {
      alert('Stok produk ini sudah habis!');
    }
  };

  const handleLogin = (userProfile) => {
    setIsLoggedIn(true);
    setUser({ ...user, ...userProfile });
  };

  const handleUpdateProfile = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <Router>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} profileImage={user.profileImage} />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/account"
            element={<Account user={user} onUpdateProfile={handleUpdateProfile} />}
          />
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
          <Route path="/product/:productId" element={<ProductDetail products={products} addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
