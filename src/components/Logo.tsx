
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/86059618-bc67-454c-b573-e51eb767d9ef.png" 
        alt="Teacher Hub Logo" 
        className="h-12 w-auto"
      />
    </Link>
  );
};

export default Logo;
