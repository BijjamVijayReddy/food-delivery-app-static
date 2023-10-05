import React from "react";
import { Routes, Route ,Navigate } from "react-router-dom"
import Home from "../pages/home/Home";
import Foods from "../pages/foods/Foods";
import Cart from "../pages/cart/Cart";
import Contact from "../pages/contact/Contact";




const AppRoutes = () => {
  return (
    <Routes baseName="Tasty Treat">
          <Route path="/home" element={<Home />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/*" element={<Navigate to="/home"/>} />

         </Routes>
  );
};

export default AppRoutes;
