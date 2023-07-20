// App.js

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import CartPage from "./Cart";
import React, { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (name, price) => {
    const newItem = { name, price };
    setCart((prevCart) => [...prevCart, newItem]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home handleAddToCart={handleAddToCart} />}
          />
          {/* Pass the handleAddToCart function to CartPage component */}
          <Route
            path="/cart"
            element={<CartPage cartItems={cart}  />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
