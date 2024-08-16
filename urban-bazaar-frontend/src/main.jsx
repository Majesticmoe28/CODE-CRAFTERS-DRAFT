import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CartProvider } from './Context/CartContext'; // Import CartProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> {/* Wrap App with CartProvider */}
      <App />
    </CartProvider>
  </StrictMode>,
);
