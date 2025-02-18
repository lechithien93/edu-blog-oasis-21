
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const categories = [
    'Technology',
    'Teaching Methods',
    'Classroom Management',
    'Student Welfare',
    'Communication'
  ];

  return (
    <footer className="bg-secondary py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Teacher Hub</h3>
            <p className="text-gray-600">
              Empowering educators with knowledge and resources for better teaching.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link 
                    to={`/category/${category.toLowerCase()}`}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/author" className="text-gray-600 hover:text-primary transition-colors">About Author</Link></li>
              <li><a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#privacy" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for the latest educational insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-6 py-2 bg-primary text-white rounded-r hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; {currentYear} Teacher Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
