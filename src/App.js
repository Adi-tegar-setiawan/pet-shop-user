import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import CartPage from './components/CartPage'; // Update nama komponen
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Dog Food', price: 50000, stock: 10, description: 'Dog food with high nutrients' },
    { id: 2, name: 'Cat Toy', price: 15000, stock: 20, description: 'Fun toy for your cat' },
    { id: 3, name: 'Fish Tank Cleaner', price: 30000, stock: 15, description: 'Keeps your fish tank clean' },
    { id: 4, name: 'Bird Cage', price: 70000, stock: 5, description: 'Comfortable cage for birds' },
  ]);

  const [cartItems, setCartItems] = useState([]);

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

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} /> {/* Update rute ini */}
          <Route path="/product/:productId" element={<ProductDetail products={products} addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
