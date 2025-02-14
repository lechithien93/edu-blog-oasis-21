
import React from 'react';
import Header from '../components/Header';
import BlogPost from '../components/BlogPost';
import Footer from '../components/Footer';
import { blogPosts } from '../data/posts';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
