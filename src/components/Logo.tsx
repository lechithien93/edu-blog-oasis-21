
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/6c90a83f-970e-4434-ab70-9faa535992a9.png" 
        alt="Teacher Hub Logo" 
        className="h-8 w-auto"
      />
    </Link>
  );
};

export default Logo;
