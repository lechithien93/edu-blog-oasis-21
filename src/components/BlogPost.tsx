
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author?: {
    name: string;
    avatar: string;
  };
}

const BlogPost = ({ id, title, excerpt, image, date, category, author }: BlogPostProps) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 flex flex-col">
      <Link to={`/post/${id}`}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-4">
            <Link 
              to={`/category/${category.toLowerCase()}`}
              className="px-3 py-1 text-sm bg-secondary text-gray-700 rounded-full hover:bg-secondary/80 transition-colors"
            >
              {category}
            </Link>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <h2 className="text-xl font-semibold mb-3 line-clamp-2 hover:text-primary transition-colors">
            {title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {excerpt}
          </p>
          {author && (
            <div className="flex items-center gap-3 mb-4">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm text-gray-700">{author.name}</span>
            </div>
          )}
          <div className="mt-auto">
            <button className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group">
              Read More 
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogPost;
