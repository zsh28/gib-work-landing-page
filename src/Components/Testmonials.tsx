import React, { useState } from "react";
import { testimonials } from "../Mockdata/data";

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const paginatedTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="py-12 max-w-[1200px] h-auto w-auto justify-center items-center text-center mx-auto">
      <h2 className="text-white font-bold text-[32px] mb-8 text-center">Testimonials</h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
          {paginatedTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center items-center text-center mx-auto space-y-4 max-w-[400px] hover:shadow-[0_4px_20px_rgba(255,255,255,0.8)] transition-shadow duration-300 ease-in-out"
            >
              <img
                src={testimonial.pfp}
                alt={testimonial.username}
                className="w-16 h-16 rounded-full"
              />
              <p className="text-lg italic pr-2">"{testimonial.message}"</p>
              <h3 className="font-semibold">{testimonial.username}</h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`cursor-pointer w-4 h-4 mx-2 rounded-full ${
                currentPage === index ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
