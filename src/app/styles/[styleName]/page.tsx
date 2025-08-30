'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import type { StyleProduct, StyleProductOption } from '@/lib/types';

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
  const [products, setProducts] = useState<StyleProduct[]>([]);
  const [selectedOptionByProduct, setSelectedOptionByProduct] = useState<Record<string, string>>(
    {}
  );

  const goTo = (index: number) => {
    const imagesCount = placeholderImages.length;
    const normalizedIndex = ((index % imagesCount) + imagesCount) % imagesCount;
    setCurrentIndex(normalizedIndex);
  };

  const goPrev = () => goTo(currentIndex - 1);
  const goNext = () => goTo(currentIndex + 1);

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      try {
        const res = await fetch(`/api/styles/${encodeURIComponent(styleName)}/products`, {
          signal: controller.signal,
        });
        if (!res.ok) return;
        const data = await res.json();
        const list: StyleProduct[] = Array.isArray(data?.products) ? data.products : [];
        setProducts(list);
        // initialize selected options
        const nextSelected: Record<string, string> = {};
        for (const p of list) {
          if (p.options?.length) nextSelected[p.id] = p.options[0].code;
        }
        setSelectedOptionByProduct(nextSelected);
      } catch {
        // noop
      }
    };
    load();
    return () => controller.abort();
  }, [styleName]);

  const formatPrice = (cents?: number) =>
    typeof cents === 'number' ? `$${(cents / 100).toFixed(2)}` : '-';

  const optionSelected = (productId: string, option: StyleProductOption) => {
    setSelectedOptionByProduct((prev) => ({ ...prev, [productId]: option.code }));
  };

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

      {/* Products Section */}
      <div className="mt-16 space-y-10">
        {products.map((product) => {
          const selectedCode = selectedOptionByProduct[product.id];
          const selected =
            product.options.find((o) => o.code === selectedCode) || product.options[0];
          return (
            <div key={product.id} className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
              {/* Preview (placeholder) */}
              <div className="md:col-span-2 flex items-start">
                <div className="relative w-32 h-44 bg-gray-100 border shadow-sm">
                  <Image src={placeholderImages[0]} alt="Preview" fill className="object-cover" />
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-10 border-b pb-6">
                <div className="grid grid-cols-12 gap-3">
                  {/* Description */}
                  <div className="col-span-12 lg:col-span-6">
                    <h4 className="text-xl font-semibold text-gray-900">{product.title}</h4>
                    <ul className="mt-2 text-sm text-gray-700 space-y-1">
                      {product.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span aria-hidden className="mt-1 h-1.5 w-1.5 rounded-full bg-brand" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Selections / Pricing Panel */}
                  <div className="col-span-12 lg:col-span-6">
                    <div className="grid grid-cols-12 gap-3">
                      {/* Codes */}
                      <div className="col-span-3">
                        <div className="text-xs uppercase text-gray-500 mb-2">Select</div>
                        <div className="space-y-1">
                          {product.options.map((o) => (
                            <button
                              key={o.code}
                              onClick={() => optionSelected(product.id, o)}
                              className={`px-2 py-1 text-sm border w-full text-left ${
                                selectedCode === o.code
                                  ? 'border-brand text-brand'
                                  : 'border-gray-200'
                              }`}
                            >
                              {o.code}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Size (display only) */}
                      <div className="col-span-6">
                        <div className="text-xs uppercase text-gray-500 mb-2">Size</div>
                        <div className="space-y-1">
                          {product.options.map((o) => (
                            <div
                              key={o.code}
                              aria-disabled
                              className={`px-2 py-1 text-sm border w-full text-left select-none pointer-events-none whitespace-nowrap ${
                                selectedCode === o.code
                                  ? 'border-brand text-brand'
                                  : 'border-gray-200 text-gray-500'
                              }`}
                            >
                              {o.size}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price */}
                      <div className="col-span-3">
                        <div className="text-xs uppercase text-gray-500 mb-2">Price</div>
                        <div className="space-y-1">
                          {selected?.discountedPrice ? (
                            <>
                              <div className="text-sm text-gray-400 line-through">
                                {formatPrice(selected.price)}
                              </div>
                              <div className="text-lg font-semibold text-red-600">
                                {formatPrice(selected.discountedPrice)}
                              </div>
                            </>
                          ) : (
                            <div className="text-lg font-semibold">
                              {formatPrice(selected?.price)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
