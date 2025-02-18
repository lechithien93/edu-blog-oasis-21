
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Author = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col items-center mb-8">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
              alt="Author"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h1 className="text-3xl font-bold text-gray-900">John Doe</h1>
            <p className="text-gray-600">Senior Education Specialist</p>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              With over 10 years of experience in education, I specialize in integrating technology 
              into traditional teaching methods. My passion lies in helping teachers adapt to the 
              evolving landscape of modern education while maintaining effective pedagogical practices.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Expertise</h2>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              <li>Educational Technology Integration</li>
              <li>Curriculum Development</li>
              <li>Professional Development Training</li>
              <li>Student-Centered Learning Strategies</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700">
              Email: john.doe@teacherhub.com<br />
              Twitter: @johndoe_edu
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Author;
