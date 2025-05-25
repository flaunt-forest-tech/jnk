import React from 'react';

const Hero = () => {
  return (
    <section className="py-10 sm:py-16">
      {/* Headline Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mb-4 sm:mb-6">
        <h1 className="text-4xl sm:text-6xl md:text-[5rem] leading-none font-black tracking-tight">
          UNIQUE
        </h1>
      </div>
      <h1 className="text-4xl sm:text-6xl md:text-[5rem] leading-none font-black tracking-tight mb-8 sm:mb-12">
        COLLECTION
      </h1>
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <img
          src="https://cdn.prod.website-files.com/658e0f2023ee3a398167cfff/6824d23c556bfbf33672f8e4_K3-B-3.avif"
          alt="Left Placeholder"
          className="w-full h-48 sm:h-[350px] object-cover rounded-xl shadow-md"
        />
        <img
          src="https://cdn.prod.website-files.com/658e0f2023ee3a398167cfff/68234922ec58a0c15390377e_E1%20Dove%20%26%20H8%20Hazel%201-p-2000.jpg"
          alt="Right Placeholder"
          className="w-full h-48 sm:h-[350px] object-cover rounded-xl shadow-md"
        />
      </div>
    </section>
  );
};

export default Hero;
