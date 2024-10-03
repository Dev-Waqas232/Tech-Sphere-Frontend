import { Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/Signup";

export default function App() {
  return (
    <>
      <main className="flex flex-col bg-primary items-center w-full min-h-[85vh]">
        <Routes>
          <Route path="/auth/signup" element={<Signup />} />
        </Routes>
      </main>
    </>
  );
}
