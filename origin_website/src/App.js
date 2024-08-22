import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./components/Cart";
import SuccessPage from "./pages/SuccessPage";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";


function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Cart />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
