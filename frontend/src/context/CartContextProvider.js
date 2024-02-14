import React, { createContext, useContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    return savedCartItems || [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item, quantity = 1) => {
    setCartItems(prevCartItems => {
      const existingItemIndex = prevCartItems.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: quantity
        };
        return updatedCartItems;
      } else {
        return [...prevCartItems, { ...item, quantity }];
      }
    });
  };

  const removeItemFromCart = (itemId) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        isInCart
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

// Custom hook to consume the ShoppingCartContext
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export default ShoppingCartProvider;
