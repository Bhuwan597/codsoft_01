import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import { UserState } from "../../context/UserContextProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useShoppingCart } from "../../context/CartContextProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const { user, setUser } = UserState();
  const { cartItems } = useShoppingCart();
  const handleLogout = (e) => {
    localStorage.removeItem("userInfo");
    setUser("");
    toast.success("Logout Successfull!");
  };
  return (
    <>
      <ToastContainer />
      <header className="max-w-screen overflow-hidden">
        <nav className="w-full flex justify-between items-center">
          <div className="w-full flex flex-row items-center justify-between bg-yellow-100 py-2 shadow-2xl shadow-black">
            <div className="brand mx-3 hidden md:flex">
              <Link to="/">
                <img
                  className="w-14 h-14 object-cover"
                  src="./logo.png"
                  alt="City Shop"
                  loading="eager"
                />
              </Link>
            </div>
            <div className="menu mx-10 flex-row gap-4 text-lg hidden md:flex">
              <Link
                className="font-medium hover:text-yellow-400 ease-in-out duration-200 hover:underline"
                to="/"
              >
                Home
              </Link>
              <a
                className="font-medium hover:text-yellow-400 ease-in-out duration-200 hover:underline"
                href="/#products"
              >
                Products
              </a>
              <Link
                className="font-medium hover:text-yellow-400 ease-in-out duration-200 hover:underline"
                to="#"
              >
                Blogs
              </Link>
              <Link
                className="font-medium hover:text-yellow-400 ease-in-out duration-200 hover:underline"
                to="#"
              >
                Support
              </Link>
            </div>
            <div className="hamburger-menu flex flex-row-reverse md:flex-row md:hidden ml-6 items-center">
              <div className="brand mx-3">
                <Link to="/">
                  <img
                    className="w-14 h-14 object-cover"
                    src="./logo.png"
                    alt="Ecommerce Website"
                    loading="eager"
                  />
                </Link>
              </div>
              {mobileMenu ? (
                <>
                  <FaTimes
                    onClick={() => setMobileMenu((prev) => !prev)}
                    className="text-yellow-500 text-2xl cursor-pointer"
                  />
                </>
              ) : (
                <>
                  <FaBars
                    onClick={() => setMobileMenu((prev) => !prev)}
                    className="text-yellow-500 text-2xl cursor-pointer"
                  />
                </>
              )}
            </div>
            <div className="buttons mx-10 flex flex-row gap-2 items-center font-bold">
              {user ? (
                <>
                  <div className="flex gap-2 justify-center items-center">
                    <p className="text-xs md:text-sm">Hi, {user.email}</p>
                    <button
                      onClick={handleLogout}
                      className="px-2 py-2 rounded-md bg-yellow-400 text-base text-white"
                    >
                      Logout
                    </button>
                    <Link
                      to={"/cart"}
                      className="text-3xl text-slate-700 relative"
                    >
                      <FaShoppingCart />
                      <span className="absolute -top-3 -right-1 text-yellow-400 text-sm">
                        {cartItems.length == 0? '': cartItems.length}
                      </span>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to={"/login"}
                    className="px-2 py-2 rounded-md hover:bg-yellow-400 text-base hover:text-white"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/signup"}
                    className="px-2 py-2 rounded-md bg-yellow-400 text-base text-white"
                  >
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
          {mobileMenu && (
            <>
              <div className="mobile-menu flex flex-col md:hidden bg-yellow-100 absolute min-w-full z-50 pl-6 pb-10 ease-in-out duration-300 top-16">
                <Link
                  className="font-medium hover:text-yellow-400 ease-in-out duration-200 hover:underline"
                  to="#"
                >
                  Home
                </Link>
                <Link
                  className="font-medium hover:text-yellow-400 ease-in-out duration-200 hover:underline"
                  to="#products"
                >
                  Products
                </Link>
                <Link
                  className="font-medium hover:text-yellow-400 ease-in-out duration-200 hover:underline"
                  to="#"
                >
                  Blogs
                </Link>
                <Link
                  className="font-medium hover:text-yellow-400 ease-in-out duration-200 hover:underline"
                  to="#"
                >
                  Support
                </Link>
              </div>
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;