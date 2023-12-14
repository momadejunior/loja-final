import React from 'react';

class Products extends React.Component {
  addToCart = (productName) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + ' added to cart!');
  };

  render() {
    return (
      <div>
        <h1>Our Products</h1>
        <ul>
          <li id="product1">
            Product 1 <button onClick={() => this.addToCart('Product 1')}>Add to Cart</button>
          </li>
          <li id="product2">
            Product 2 <button onClick={() => this.addToCart('Product 2')}>Add to Cart</button>
          </li>
          <li id="product3">
            Product 3 <button onClick={() => this.addToCart('Product 3')}>Add to Cart</button>
          </li>
        </ul>
        <a href="cart.html">Go to Cart</a>
      </div>
    );
  }
}

export default Products;
