import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../app/features/api/productsApi';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || '0', 10);

  const { data: product, isLoading, isError } = useGetProductByIdQuery(productId);
  console.log('product is', productId)
  console.log('lol is', product)

  if (isLoading) return <div className="text-center mt-8">Loading product details...</div>;
  if (isError || !product) return <div className="text-center mt-8 text-red-600">Error loading product details</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded mb-4" />
      <p className="text-gray-700"><strong>Category:</strong> {product.category}</p>
      <p className="text-gray-700"><strong>Price:</strong> ${product.price}</p>
      <p className="text-gray-700"><strong>Stock:</strong> {product.stock}</p>
      <p className="text-gray-700"><strong>Rating:</strong> {product.rating}</p>
      <p className="text-gray-700"><strong>Brand:</strong> {product.brand}</p>
      <p className="text-gray-700"><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

export default ProductDetails;