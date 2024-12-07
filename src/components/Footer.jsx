import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* First Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">About Us</h3>
            <p className="text-sm">
              We are dedicated to providing the best selection of books at affordable prices. Explore a wide variety of categories and genres tailored to suit your interests.
            </p>
          </div>
          
          {/* Second Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm hover:text-yellow-500 transition duration-300">Home</a>
              </li>
              <li>
                <a href="/categories" className="text-sm hover:text-yellow-500 transition duration-300">Categories</a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-yellow-500 transition duration-300">Contact Us</a>
              </li>
              <li>
                <a href="/about" className="text-sm hover:text-yellow-500 transition duration-300">About Us</a>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <p className="text-sm">Email: <a href="mailto:support@bookstore.com" className="text-yellow-500">support@bookstore.com</a></p>
            <p className="text-sm">Phone: <a href="tel:+15551234567" className="text-yellow-500">+1 (555) 123-4567</a></p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
