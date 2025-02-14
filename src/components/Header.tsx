
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="relative h-[500px] mb-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Teacher Hub
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fade-in">
          A community-driven platform for educators to share knowledge, experiences, and best practices in teaching.
        </p>
        <Link
          to="/"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full transition-colors animate-fade-in"
        >
          Explore Articles
        </Link>
      </div>
    </header>
  );
};

export default Header;
