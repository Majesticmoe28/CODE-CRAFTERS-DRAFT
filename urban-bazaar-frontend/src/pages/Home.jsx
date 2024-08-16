import React from 'react';
import { Link } from 'react-router-dom';

const featuredProducts = [
  { id: 1, name: 'Product 1', description: 'Description for product 1', price: 29.99, imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', description: 'Description for product 2', price: 39.99, imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', description: 'Description for product 3', price: 49.99, imageUrl: 'https://via.placeholder.com/150' },
];

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Store</h1>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">${product.price.toFixed(2)}</span>
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
