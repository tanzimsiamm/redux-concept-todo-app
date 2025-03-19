import { useState } from "react";
import { useAddProductMutation, useDeleteProductMutation, useGetProductsQuery, useUpdateProductMutation } from "../app/features/api/productsApi";
import { Link } from "react-router-dom";

const Products = () => {
    const { data: products, error, isLoading } = useGetProductsQuery();
    const [addProduct] = useAddProductMutation();
    const [updateProduct] = useUpdateProductMutation();
    const [deleteProduct] = useDeleteProductMutation();
    const [search, setSearch] = useState("");
    
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading products</p>;
    
    const handleAddProduct = async () => {
      await addProduct({
        id: Date.now(),
        name: "New Product",
        category: "Misc",
        price: 50,
        stock: 20,
        rating: 4.5,
        image: "https://via.placeholder.com/150",
        description: "A newly added product.",
        brand: "Generic"
      });
    };
    
    const handleUpdateProduct = async (id) => {
      await updateProduct({
        id,
        updatedProduct: { name: "Updated Product Name" }
      });
    };
    
    const handleDeleteProduct = async (id) => {
      await deleteProduct(id);
    };
    
    const filteredProducts = products?.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 w-full mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleAddProduct} className="bg-green-500 text-white px-4 py-2 rounded mb-4">Add Product</button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredProducts?.map((product) => (
            <div key={product.id} className="border p-4 rounded">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <button onClick={() => handleUpdateProduct(product.id)} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Update</button>
              <button onClick={() => handleDeleteProduct(product.id)} className="bg-red-500 text-white px-4 py-2 rounded mt-2 ml-2">Delete</button>
              <Link to={`/product/${product.id}`} className="text-blue-500 block mt-2">View Details</Link>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Products;