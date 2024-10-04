import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../utils/typedUseSelector";

export default function AdminRoutes() {
  const { user } = useAppSelector((state) => state.auth);
  if (user?.isAdmin) return <Outlet />;
  return <Navigate to="/" />;
}
