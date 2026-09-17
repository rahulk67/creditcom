
import React, { useEffect, useState } from 'react';

const CommentCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const comments = [
    {
      image: "/profilereview.png",
      comment: "Incredibles is best app for the credit cash rewards. Easy to use and optimized",
      name: "Karan Jain",
      date: "Oct 01, 2024",
      rating: 5,
    },
    {
      image: "/profilereview.png",
      comment: "I got a great cash reward from the credit rewards feature in the Incredibles",
      name: "Shivani Garg",
      date: "Sep 14, 2024",
      rating: 5,
    },
    {
      image: "/profilereview.png",
      comment: "Got the amazing deal offer for buying me a new phone with the best cash back using Incredibles.",
      name: "Anup Kumar",
      date: "May 22, 2024",
      rating: 5,
    },
    {
      image: "/profilereview.png",
      comment: "Amazing! Incredibles is really just a incredible and beautiful. Got highest cash bak reward from it.",
      name: "Nikhil Kumar",
      date: "June 03, 2024",
      rating: 5,
    },
  ];

  const totalSlides = comments.length;

  useEffect(() => {
    const interval = setInterval(() => {
      // Moves to the next slide, resets if it's the last one
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // Adjust the speed of the sliding here (3000ms = 3 seconds)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [totalSlides]);

  const renderStars = (rating) => {
    const totalStars = 5;
    return [...Array(totalStars)].map((_, index) => (
      <svg
        key={index}
        className={`h-6 w-6 ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {comments.map((comment, index) => (
          <div key={index} className="min-w-full p-8 text-left ">

            <div className="flex border p-1 items-start">
              <img
                className="block h-10 w-10 max-w-full flex-shrink-0 rounded-full"
                src={comment.image}
                alt={comment.name}
              />
              <div className="ml-6">
                <div className="flex items-center">
                  {renderStars(comment.rating)}
                </div>
                <p className="mt-5 text-base text-gray-900">{comment.comment}</p>
                <p className="mt-5 text-sm font-bold text-gray-900">{comment.name}</p>
                <p className="mt-1 text-sm text-gray-600">{comment.date}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentCarousel;
