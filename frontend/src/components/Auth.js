import { Outlet, Navigate } from "react-router-dom";
import { UserState } from "../context/UserContextProvider";

const Auth = () => {
    const {user} = UserState();
  const storedUser = JSON.parse(localStorage.getItem("userInfo"));

  if (typeof window === "undefined") return null;

  return (storedUser || user ? <Outlet /> : <Navigate to="/login" />)
};

export default Auth;
