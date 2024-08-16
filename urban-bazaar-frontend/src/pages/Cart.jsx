// src/pages/Cart.jsx
import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext'; // Ensure this path is correct

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext); // Use 'cart' instead of 'cartItems'
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    // Handle checkout process
    setIsCheckingOut(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? ( // Use 'cart' instead of 'cartItems'
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((item) => ( // Use 'cart' instead of 'cartItems'
              <li key={item.id} className="flex items-center justify-between p-4 border-b">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
            <div className="text-lg font-semibold">
              Total: ${getTotalPrice()}
            </div>
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={handleCheckout}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              disabled={isCheckingOut}
            >
              {isCheckingOut ? 'Processing...' : 'Checkout'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
