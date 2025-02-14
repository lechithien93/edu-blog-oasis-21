
import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import TableOfContents from '../components/TableOfContents';
import { blogPosts } from '../data/posts';

const PostDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-white/10 text-white rounded-full">
                {post.category}
              </span>
              <span className="text-white/80">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="flex gap-12">
          <article className="flex-1 max-w-3xl prose prose-lg">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
          <aside className="hidden lg:block w-64">
            <TableOfContents />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PostDetail;
