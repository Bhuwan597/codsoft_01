import { Outlet, Link } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
