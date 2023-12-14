import React, { useEffect } from 'react';

const ShoppingCart = () => {
  const displayCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cartItems');

    // Clear previous items
    cartItems.innerHTML = '';

    // Display current items
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      cartItems.appendChild(li);
    });
  };

  // Display cart when the component mounts
  useEffect(() => {
    displayCart();
  }, []);

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <ul id="cartItems">
        {/* Cart items will be displayed here */}
      </ul>
      <a href="checkout.html">Proceed to Checkout</a>
    </div>
  );
};

export default ShoppingCart;
