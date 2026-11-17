import { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import HomePage from "./Pages/HomePage"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Products from "./Pages/Products"
import FoundError from "./Pages/FoundError"
import ProductDetails from "./Pages/ProductDetails"
import Footer from "./Components/Footer"
import Cart from "./Pages/Cart"

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
   useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
    const addToCart = (product) => {
      setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id);
        if (existingProduct) {
          return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 }: item);
        }
        return [...prevCart, { ...product, quantity: 1 }]; });
    };
    const increaseQuantity = (id) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 }: item)
      );
    };
    const decreaseQuantity = (id) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)
      );
    };
    const removeProduct = (id) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };
    const cartCount = cart.reduce(
      (total, product) => total + product.quantity, 0
    );
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar cart={cart} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<FoundError />} />
          <Route path="/products/:id" element={<ProductDetails addToCart={addToCart} />}/>
          <Route path="/cart" element={<Cart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}removeProduct={removeProduct}/>}/>
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App

