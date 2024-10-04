import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

import Signup from "./pages/auth/Signup";
import Signin from "./pages/auth/Signin";
import Dashboard from "./pages/admin/Dashbaord";

export default function App() {
  return (
    <>
      <ToastContainer />
      <main className="flex flex-col bg-primary items-center w-full min-h-[85vh]">
        <Routes>
          {/* Auth Routes */}
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/signin" element={<Signin />} />
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Dashboard />} />
          <Route path="/admin/orders" element={<Dashboard />} />
          <Route path="/admin/users" element={<Dashboard />} />
          <Route path="/admin/settings" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
}
