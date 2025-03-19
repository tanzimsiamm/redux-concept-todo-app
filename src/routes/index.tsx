import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import NotFound from "../utils/NotFound";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Ensure App contains an <Outlet />
    children: [
      { path: '/', element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'product/:id', element: <ProductDetails /> }, // ✅ Correct path
      { path: '*', element: <NotFound /> }
    ],
  },
]);
