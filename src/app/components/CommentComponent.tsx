'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const Comments = () => {
  // State for comments (array of strings) and comment input (string)
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState<string>('');

  // Handle adding a comment
  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!comment.trim()) return; // Prevent empty or whitespace-only comments
    setComments((prevComments) => [...prevComments, comment]); // Add comment to list
    setComment(''); // Clear the input
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Comments</h3>
      
      {/* Comment Form */}
      <form onSubmit={handleAddComment} className="mb-4">
        <textarea
          className="w-full border border-gray-300 rounded-lg p-2 mb-2"
          rows={3}
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          type="submit"
          className="bg-rose-500 text-white py-1 px-4 rounded-lg"
        >
          Post Comment
        </button>
      </form>
      
      {/* Display Comments */}
      <ul className="space-y-4">
        {comments.map((cmt, index) => (
          <li
            key={index}
            className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <Image
                className="w-10 h-10 rounded-full"
                src={`https://i.pravatar.cc/150?img=${index + 1}`} // Dynamic profile picture
                alt="User Avatar"
                width={40} // Specify width
                height={40} // Specify height
              />
            </div>

            {/* Comment Text */}
            <div>
              <p className="text-sm font-semibold text-gray-800">User {index + 1}</p> {/* Replace with username if available */}
              <p className="text-gray-700 mt-1">{cmt}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
