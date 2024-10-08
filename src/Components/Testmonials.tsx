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
    <div className="py-12 max-w-[1200px] w-full h-auto justify-center items-center text-center mx-auto px-4">
      <h2 className="text-black font-bold text-[32px] mb-2 text-center">Testimonials</h2>
      <div className="text-[#8151fd] text-[20px] mb-10">
        See what our current users have to say
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {paginatedTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-lg p-6 flex flex-col justify-center items-center text-center transition-shadow duration-300 ease-in-out shadow-[0_0_20px_10px_rgba(129,81,253,0.5)]"
            style={{
              height: "250px",
            }}
          >
            <img
              src={testimonial.pfp}
              alt={testimonial.username}
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-lg italic mb-2">"{testimonial.message}"</p>
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
              currentPage === index ? 'bg-[#8151fd]' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
