import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import GuestRoute from "./components/GuestRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Auth from "./components/Auth";
import UserProvider from "./context/UserContextProvider";
import FullPageProduct from "./components/Products/FullPageProduct";
import ShoppingCartProvider from "./context/CartContextProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <ShoppingCartProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route element={<GuestRoute />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </Route>
                <Route element={<Auth />}>
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/products/:id" element={<FullPageProduct />} />
                </Route>
              </Route>
            </Routes>
          </ShoppingCartProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
