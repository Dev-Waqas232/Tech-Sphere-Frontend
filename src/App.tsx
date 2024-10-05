import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import Dashboard from "./pages/admin/Dashbaord";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminRoutes from "./components/AdminRoutes";
import AddProduct from "./pages/admin/AddProduct";

export default function App() {
  return (
    <>
      <ToastContainer />
      <main className="flex flex-col bg-secondary items-center w-full min-h-screen">
        <Routes>
          {/* Auth Routes */}
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/signin" element={<Signin />} />
          {/* Admin Routes */}
          <Route element={<AdminRoutes />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/admin/orders" element={<Dashboard />} />
            <Route path="/admin/users" element={<Dashboard />} />
            <Route path="/admin/settings" element={<Dashboard />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}
