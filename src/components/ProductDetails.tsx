import { useParams } from 'react-router-dom';
import { useGetProdutByIdQuery } from '../app/features/api/productsApi';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetProdutByIdQuery(Number(id));

  console.log("Product ID:", id);
  console.log("Fetched Product Data:", data);
  console.log("Error:", error);

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    return <p>Error: {error?.status} - {error.data?.message || 'Failed to load product'}</p>;
  }
  if (!data) return <p>Product not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{data?.name}</h1>
      <img src={data?.image} alt={data?.name} className="w-96 h-96 object-cover" />
      <p className="text-gray-600">{data?.description}</p>
      <p className="text-lg font-semibold">Price: ${data?.price}</p>
      <p>Stock: {data?.stock}</p>
    </div>
  );
};

export default ProductDetails;