import { Navigate, Outlet, useLocation } from "react-router";
import { useUserContext } from "../context/UserContext";

export function ProtectedRoute() {
  const { userState } = useUserContext();
  const location = useLocation();

  if (userState.status === "loading") return <p>Checking your session…</p>;
  if (userState.status === "error") return <p>{userState.message}</p>;

  if (userState.status === "anonymous") {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
}