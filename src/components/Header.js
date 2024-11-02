// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ isLoggedIn, profileImage }) {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate('/account');  // Arahkan ke halaman Account jika sudah login
    } else {
      navigate('/login');    // Arahkan ke halaman Login jika belum login
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/">Pet Shop</a>  {/* Nama toko di kiri atas */}
      </div>
      <nav className="nav">
        <a href="/">Beranda</a>
        <a href="/cart">Keranjang</a>
        <div className="profile-icon" onClick={handleProfileClick}>
          <img
            src={profileImage || `${process.env.PUBLIC_URL}/images/profil.jpg`}
            // Gambar profil atau default
            alt="Profile"
            className="profile-image"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
