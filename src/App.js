import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/CheckOut/Checkout.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetails from "./pages/Product-Details/ProductDetails.jsx";

import AddToCartButton from "./components/AddToCartButton/AddToCartButton.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Menu />} />
          {/* <Route path="/product-details" element={<ProductDetails />} /> */}
          <Route path="/product" element = {<ProductDetails />}>
            <Route path=":productId" element = {<ProductDetails />}/>
          </Route>
          <Route path="/mycart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
        <AddToCartButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
