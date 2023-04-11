import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
  }, []);

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  }

  const handleUpdateQuantity = (itemId, quantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        item.quantity = quantity;
      }
      return item;
    });
    setCartItems(updatedCartItems);
  }

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <input type="number" min="1" max="10" value={item.quantity} onChange={(e) => handleUpdateQuantity(item.id, e.target.value)} />
              </td>
              <td>
                <button variant="danger" onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price">
        Total: ${totalPrice.toFixed(2)}
      </div>
      <Link to="/checkout">
        <button variant="primary">Checkout</button>
      </Link>
    </div>
  );
}

export default Cart;