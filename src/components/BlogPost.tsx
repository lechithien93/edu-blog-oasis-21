
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

const BlogPost = ({ id, title, excerpt, image, date, category }: BlogPostProps) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
      <Link to={`/post/${id}`}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center mb-4">
            <span className="px-3 py-1 text-sm bg-secondary text-gray-700 rounded-full">
              {category}
            </span>
            <span className="ml-4 text-sm text-gray-500">{date}</span>
          </div>
          <h2 className="text-xl font-semibold mb-3 line-clamp-2 hover:text-primary transition-colors">
            {title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {excerpt}
          </p>
          <div className="flex items-center justify-between">
            <button className="text-primary hover:text-primary/80 font-medium transition-colors">
              Read More →
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogPost;
