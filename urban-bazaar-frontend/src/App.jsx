import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp'; 
import Login from './pages/Login'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { CartProvider } from './Context/CartContext'; // Corrected import
import AuthSuccess from './pages/AuthSuccess'; 

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/authsuccess" element={<AuthSuccess />} /> 
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
