import React, { useState } from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #ddd;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.p`
  font-weight: bold;
  margin: 0;
`;

const ItemQuantity = styled.p`
  margin: 0;
  color: #555;
`;

const ItemPrice = styled.p`
  margin: 0;
  font-size: 1.1em;
  color: #007bff;
`;

const TotalContainer = styled.div`
  margin-top: 20px;
  font-size: 1.2em;
  font-weight: bold;
  text-align: right;
`;

const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 12px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const CheckoutButton = styled.button`
  padding: 12px;
  font-size: 1.2em;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

function CartPage({ cartItems }) {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleCheckout = (e) => {
    e.preventDefault();
    alert(`Checkout berhasil!\nAlamat: ${address}\nMetode Pembayaran: ${paymentMethod}`);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContainer>
      <h2>Keranjang Belanja</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id}>
          <ItemDetails>
            <ItemName>{item.name}</ItemName>
            <ItemQuantity>Jumlah: {item.quantity}</ItemQuantity>
          </ItemDetails>
          <ItemPrice>Rp {(item.price * item.quantity).toLocaleString()}</ItemPrice>
        </CartItem>
      ))}
      <TotalContainer>Total Harga: Rp {totalAmount.toLocaleString()}</TotalContainer>

      <CheckoutForm onSubmit={handleCheckout}>
        <h3>Checkout</h3>
        <label>Alamat Pengiriman:</label>
        <Input
          type="text"
          placeholder="Masukkan alamat pengiriman"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        
        <label>Metode Pembayaran:</label>
        <Select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="">Pilih metode pembayaran</option>
          <option value="Kartu Kredit">Kartu Kredit</option>
          <option value="Transfer Bank">Transfer Bank</option>
          <option value="COD">Cash on Delivery (COD)</option>
        </Select>
        
        <CheckoutButton type="submit">Checkout</CheckoutButton>
      </CheckoutForm>
    </CartContainer>
  );
}

export default CartPage;
