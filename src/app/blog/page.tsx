'use client';

import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import React, { useEffect, useState } from 'react';

// Sanity's URL builder configuration
const builder = imageUrlBuilder(client);

function urlForImage(source: any) {
  return builder.image(source).url();
}

type Post = {
  summary: string;
  title: string;
  image: { asset: { _ref: string; _type: string } };
  slug: { current: string };
};

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type=='post'] | order(_createdAt asc) {
          summary,
          title,
          image { asset },
          slug { current }
        }`;
        const posts: Post[] = await client.fetch(query);
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="bg-white py-16">
      {/* Hero Section */}
      <div className="container mx-auto text-center px-6 mb-12">
        <h2 className="text-4xl font-extrabold text-rose-400 leading-tight mb-4">
          Smartify AI Blog
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Stay updated with the latest insights, trends, and news in the world of Artificial Intelligence.
        </p>
      </div>

      {/* Blog Posts Section */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-400 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={urlForImage(post.image.asset)}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6">{post.summary}</p>
                <a
                  href={`/blog/${post.slug.current}`}
                  className="text-rose-500 font-semibold hover:text-rose-600 transition duration-300"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
