import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Pastikan Link diimpor dari react-router-dom
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Proses registrasi
    navigate('/login'); // Arahkan ke halaman login setelah registrasi berhasil
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p className="login-link">
        Sudah punya akun? <Link to="/login">Login di sini</Link>
      </p>
    </div>
  );
}

export default Register;
