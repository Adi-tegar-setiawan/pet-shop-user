import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Pet Shop</Link>
      </div>
      <nav className="nav">
        <Link to="/">Beranda</Link>
        <Link to="/login">Login</Link>
        <Link to="/cart">Keranjang</Link>
      </nav>
    </header>
  );
}

export default Header;
