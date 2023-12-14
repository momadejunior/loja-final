import React from 'react';
import Products from './products';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <>
    <div>
      <h1>Welcome to our store!</h1>
      <p>Explore our products and find great deals.</p>
      <Link to="/products" element={<Products/>}>View Products</Link>
    </div>
    </>
  );
}

export default Homepage;
