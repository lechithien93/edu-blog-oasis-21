
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/posts';
import BlogPost from '../components/BlogPost';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Category = () => {
  const { category } = useParams();
  const filteredPosts = blogPosts.filter(
    post => post.category.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          {category} Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Category;
