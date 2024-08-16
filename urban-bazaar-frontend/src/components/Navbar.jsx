import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-900">
            <a href="/">YourBrand</a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="/products" className="text-gray-700 hover:text-gray-900">Products</a>
            <a href="/signup" className="text-gray-700 hover:text-gray-900">Sign Up</a>
            <a href="/login" className="text-gray-700 hover:text-gray-900">Login</a>
            <a href="/cart" className="text-gray-700 hover:text-gray-900">Cart</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-700 hover:text-gray-900 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <a href="/" className="block px-2 py-1 text-gray-700 hover:text-gray-900">Home</a>
            <a href="/products" className="block px-2 py-1 text-gray-700 hover:text-gray-900">Products</a>
            <a href="/signup" className="block px-2 py-1 text-gray-700 hover:text-gray-900">Sign Up</a>
            <a href="/login" className="block px-2 py-1 text-gray-700 hover:text-gray-900">Login</a>
            <a href="/cart" className="block px-2 py-1 text-gray-700 hover:text-gray-900">Cart</a>
          </div>
        )}
      </div>
    </nav>
  );
}
