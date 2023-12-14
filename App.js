import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import Products from './products';
import ShoppingCart from './cart';
import Checkout from './checkout';


const App = () => {
  return (
    <>
    <Router>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/products">Shop</Link></li>
      <li><Link to="/cart">Go to Cart</Link></li>
      <li><Link to="/checkout">Checkout</Link></li>

      <Routes>
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="home" element={<Homepage />}/>
        <Route path="products" element={<Products />}/>
        <Route path="checkout" element={<Checkout />}/>
      </Routes>
    </Router>
    </>
  );
};

export default App;
