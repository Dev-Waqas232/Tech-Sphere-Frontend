import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

import Signup from "./pages/auth/Signup";

export default function App() {
  return (
    <>
      <ToastContainer />
      <main className="flex flex-col bg-primary items-center w-full min-h-[85vh] px-4">
        <Routes>
          <Route path="/auth/signup" element={<Signup />} />
        </Routes>
      </main>
    </>
  );
}
