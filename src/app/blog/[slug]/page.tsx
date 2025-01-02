import Comments from '@/app/components/CommentComponent';
import { components } from '@/app/components/CustomComponent';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export const revalidate = 60; // In seconds

// `generateStaticParams` generates the paths for dynamic routes
export async function generateStaticParams() {
  const query = `*[_type == 'post']{ "slug": slug.current }`;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((item: { slug: string }) => item.slug);

  return slugRoutes.map((slug: string) => ({
    slug,
  }));
}

// The page function for rendering a single post
export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const query = `*[_type == 'post' && slug.current == $slug][0]{
    title, summary, image, content, author->{bio, image, name}
  }`;
  const post = await client.fetch(query, { slug });

  if (!post) {
    return <div className="text-center text-lg font-semibold text-rose-500">Post not found</div>;
  }

  return (
    <article className="bg-white  border-gray-500 border-1 md:border-2  border-spacing-1 font-sans px-4 sm:px-6 lg:px-12 xl:px-16 text-justify  flex flex-col gap-y-12 animate__animated animate__fadeIn">
      {/* Title */}
      <h1 className="text-rose-600 text-xl sm:text-4xl lg:text-5xl font-extrabold py-10 leading-tight tracking-tight mb-8 text-center transition-all duration-300 hover:text-rose-700">
        {post.title}
      </h1>

      {/* Featured Image and Summary Section in Flexbox */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-20">
        {/* Image Section (Left) */}
        <div className="w-full md:w-[48%] mb-8 md:mb-0">
          <div className="w-full h-auto overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 transform hover:scale-105">
            <Image
              src={urlFor(post.image).width(1200).height(700).url()}
              alt={post.title}
              className="w-full h-[400px] sm:h-[500px] object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>

        {/* Summary Section (Right) */}
        <section className="w-full md:w-[48%] space-y-6 sm:space-y-8 mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-rose-600 capitalize tracking-wider">
            Summary
          </h2>
          <p className="italic text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-800">
            {post.summary}
          </p>
        </section>
      </div>

      {/* Author Section */}
      <section className="flex gap-6 sm:gap-8 items-start justify-start mb-12 animate__animated animate__fadeInUp">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-rose-600">
          <img
            src={urlFor(post.author.image).width(100).height(100).url()}
            alt={post.author.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
            {post.author.name}
          </h3>
          <p className="italic text-sm sm:text-base text-gray-700">
            {post.author.bio}
          </p>
        </div>
      </section>

     {/* Main Body of Blog */}
<section
  className="
    text-lg sm:text-xl lg:text-2xl 
    leading-relaxed text-gray-800 mb-12 
    dark:text-gray-300   
    prose-li:list-disc prose-li:list-inside
    prose-strong:text-dark dark:prose-strong:text-white
    max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
>
  <PortableText value={post.content} components={components} />
</section>
{/* Add Comments Section */}
<div className="">
        <Comments />
      </div>

    </article>
    
  );
}
