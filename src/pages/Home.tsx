import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to Our Store</h1>
      <Link to="/products" className="text-blue-500">Browse Products</Link>
    </div>
  );
};

export default Home;