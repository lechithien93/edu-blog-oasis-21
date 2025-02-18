
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Input } from './ui/input';

interface HeaderProps {
  showBanner?: boolean;
}

const Header = ({ showBanner = false }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const categories = [
    { name: 'Technology', href: '#' },
    { name: 'Teaching Methods', href: '#' },
    { name: 'Classroom Management', href: '#' },
    { name: 'Student Welfare', href: '#' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Search query:', searchQuery);
  };

  return (
    <header className={`relative ${showBanner ? 'h-[500px]' : 'h-auto'} mb-${showBanner ? '16' : '0'}`}>
      {showBanner && (
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}
      <nav className={`relative container mx-auto px-4 py-6 ${!showBanner && 'bg-primary text-white'}`}>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Link to="/" className="inline-block">
            <h2 className="text-2xl font-bold text-white">Teacher Hub</h2>
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.href}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <form onSubmit={handleSearch} className="flex-1 md:w-64">
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              />
            </form>
          </div>
        </div>
      </nav>
      {showBanner && (
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white -mt-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Teacher Hub
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in">
            A community-driven platform for educators to share knowledge, experiences, and best practices in teaching.
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
