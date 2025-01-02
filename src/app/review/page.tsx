'use client'
import React, { useState } from "react";
import { MdOutlineStar } from "react-icons/md";

const ReviewPage = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([
    {
      name: "Emily",
      review: "Great platform for learning AI. Highly recommend!",
      rating: 5,
    },
    {
      name: "Herry",
      review: "Very informative content, but could use more case studies.",
      rating: 4,
    },
    {
      name: "Max",
      review: "Excellent resources for both beginners and experts!",
      rating: 5,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review && rating) {
      setReviews([
        ...reviews,
        {
          name: "Anonymous",
          review: review,
          rating: rating,
        },
      ]);
      setReview("");
      setRating(0);
    }
  };

  return (
    <section className="bg-white py-16">
      {/* Hero Section */}
      <div className="container mx-auto text-center px-6 mb-16">
        <h1 className="text-4xl font-extrabold text-rose-400 leading-tight mb-4">
          Share Your Experience
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We value your feedback! Help us improve by sharing your thoughts.
        </p>
      </div>

      {/* Review Submission Form */}
      <div className="container mx-auto px-6 mb-16 bg-white rounded-lg shadow-lg p-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Submit a Review 
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="rating" className="block text-gray-700 mb-2 text-lg font-semibold">
              Rating (1 to 5)
            </label>
            <select
              id="rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 transition duration-300"
              required
            >
              <option value={0}>Select a Rating</option>
              <option value={1}>1 - Poor</option>
              <option value={2}>2 - Fair</option>
              <option value={3}>3 - Good</option>
              <option value={4}>4 - Very Good</option>
              <option value={5}>5 - Excellent</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="review" className="block text-gray-700 mb-2 text-lg font-semibold">
              Your Review
            </label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 transition duration-300"
              placeholder="Write your thoughts here..."
              rows="6"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-rose-400 text-white py-4 rounded-lg hover:bg-rose-500 transition duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* User Reviews Section */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border-2 border-rose-400 rounded-lg shadow-lg p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-rose-400 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
                  <p className="text-sm text-gray-500">Rating: 
                    {/* Render Rating as Stars */}
                    {[...Array(5)].map((_, i) => (
                      <MdOutlineStar
                        key={i}
                        className={`inline-block ${i < review.rating ? "text-yellow-400" : "text-gray-300"} mr-1`}
                      />
                    ))}
                  </p>
                </div>
              </div>
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewPage;
