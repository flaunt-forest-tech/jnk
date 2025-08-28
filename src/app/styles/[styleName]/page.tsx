'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';

const placeholderImages = [
  '/assets/BaseCabinets/1-1.jpg',
  '/assets/BaseCabinets/1-2.jpg',
  '/assets/BaseCabinets/1-3.jpg',
  '/assets/BaseCabinets/1-4.jpg',
];

export default function StylePage() {
  const params = useParams();
  const styleName =
    typeof params?.styleName === 'string'
      ? decodeURIComponent(params.styleName)
      : 'Kitchen Collection';

  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index: number) => {
    const imagesCount = placeholderImages.length;
    const normalizedIndex = ((index % imagesCount) + imagesCount) % imagesCount;
    setCurrentIndex(normalizedIndex);
  };

  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  return (
    <section className="py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Image Carousel */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="hidden sm:flex flex-col gap-3 w-20">
            {placeholderImages.map((src, idx) => (
              <button
                key={src}
                onClick={() => goTo(idx)}
                aria-label={`Go to image ${idx + 1}`}
                className={`relative aspect-[3/4] overflow-hidden border ${
                  idx === currentIndex ? 'border-brand' : 'border-gray-200'
                }`}
              >
                <Image
                  src={src}
                  alt={`Preview ${idx + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative flex-1">
            <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
              <Image
                src={placeholderImages[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                fill
                priority
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover"
              />
            </div>

            {/* Controls */}
            <button
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full h-9 w-9 grid place-items-center text-gray-800 shadow"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full h-9 w-9 grid place-items-center text-gray-800 shadow"
            >
              ›
            </button>

            {/* Dots */}
            <div className="mt-3 flex items-center justify-center gap-2">
              {placeholderImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 w-2.5 rounded-full ${
                    idx === currentIndex ? 'bg-brand' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Description */}
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl font-bold text-gray-900">Washington</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-lg text-gray-700">
              <span>Shaker</span>
              <span className="text-gray-400">|</span>
              <span>RTF</span>
              <span className="text-gray-400">|</span>
              <span className="capitalize">{styleName}</span>
            </div>
            <p className="mt-5 text-gray-700 max-w-prose">
              Washington from Home Decorators Collection is a classic shaker door style with a
              matching drawer front. Featuring functionality and versatility this collection can be
              used in any design throughout the home.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-800">
            <li className="flex items-center gap-3">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
              <span>All Plywood Cabinet Construction</span>
            </li>
            <li className="flex items-center gap-3">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
              <span>Solid Hardwood Dovetail Drawers</span>
            </li>
            <li className="flex items-center gap-3">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
              <span>CARB II compliant</span>
            </li>
            <li className="flex items-center gap-3">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
              <span>Ships in 7–10 Business Days</span>
            </li>
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="w-full bg-brand hover:bg-brand-700 text-white py-4 text-lg font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2">
              Shop RTA Cabinets
              <span className="block text-xs font-normal opacity-80">(save money)</span>
            </button>
            <button className="w-full bg-brand hover:bg-brand-700 text-white py-4 text-lg font-semibold rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2">
              Shop Assembled Cabinets
              <span className="block text-xs font-normal opacity-80">(save time)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
