import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  flex: 1;
  img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const InfoContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductTitle = styled.h2`
  font-size: 2em;
  margin: 0;
`;

const ProductPrice = styled.p`
  font-size: 1.5em;
  color: #007bff;
`;

const ProductStock = styled.p`
  font-size: 1em;
  color: ${props => (props.stock > 0 ? '#28a745' : '#dc3545')};
`;

const ProductDescription = styled.p`
  font-size: 1em;
  color: #555;
  line-height: 1.6;
`;

const AddToCartButton = styled.button`
  padding: 12px 24px;
  font-size: 1em;
  color: #fff;
  background-color: ${props => (props.disabled ? '#ccc' : '#007bff')};
  border: none;
  border-radius: 5px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => (props.disabled ? '#ccc' : '#0056b3')};
  }
`;

function ProductDetail({ products, addToCart }) {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Produk tidak ditemukan.</div>;
  }

  return (
    <DetailContainer>
      <ImageContainer>
        <img src="{product.image}" alt={product.name} />
      </ImageContainer>
      <InfoContainer>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductPrice>Harga: Rp {product.price.toLocaleString()}</ProductPrice>
        <ProductStock stock={product.stock}>Stok: {product.stock > 0 ? product.stock : 'Habis'}</ProductStock>
        <ProductDescription>{product.description}</ProductDescription>
        <AddToCartButton
          onClick={() => addToCart(product.id)}
          disabled={product.stock <= 0}
        >
          {product.stock > 0 ? 'Tambah ke Keranjang' : 'Stok Habis'}
        </AddToCartButton>
      </InfoContainer>
    </DetailContainer>
  );
}

export default ProductDetail;
