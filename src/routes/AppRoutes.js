import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/home/Home";
import Foods from "../pages/foods/Foods";
import Cart from "../pages/cart/Cart";
import FoodDetails from "../pages/foodDeatils/FoodDeatils";
import Checkout from "../pages/checkout/Checkout";
import Login from "../pages/login/Login";
import Register from "../pages/registration/Registration";




const AppRoutes = () => {
  return (
    <Routes baseName="Tasty Treat">
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<Foods />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Register />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<Navigate to="/home" />} />

    </Routes>
  );
};

export default AppRoutes;
