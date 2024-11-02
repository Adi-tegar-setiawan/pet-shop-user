// src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ products, addToCart }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Produk tidak ditemukan.</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Deskripsi: {product.description}</p>
      <p>Harga: RP {product.price}</p>
      <p>Stok: {product.stock}</p>
      <button onClick={() => addToCart(product.id)}>Tambah ke Keranjang</button>
    </div>
  );
};

export default ProductDetail;
