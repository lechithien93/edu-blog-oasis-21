
import React, { useState } from 'react';
import Header from '../components/Header';
import BlogPost from '../components/BlogPost';
import Footer from '../components/Footer';
import { blogPosts } from '../data/posts';
import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 6;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const offset = currentPage * ITEMS_PER_PAGE;
  const currentPagePosts = blogPosts.slice(offset, offset + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {currentPagePosts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>

        <ReactPaginate
          previousLabel="← Previous"
          nextLabel="Next →"
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName="flex items-center justify-center gap-2 mt-8"
          pageClassName="px-3 py-1 rounded hover:bg-gray-100"
          previousClassName="px-3 py-1 rounded hover:bg-gray-100"
          nextClassName="px-3 py-1 rounded hover:bg-gray-100"
          activeClassName="bg-primary text-white hover:bg-primary/90"
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
