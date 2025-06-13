'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { productTypes } from '../../../constants/data/products-data';

interface StylePageParams {
  styleName: string;
}

interface StylePageProps {
  params: Promise<StylePageParams>;
}

const StylePage: React.FC<StylePageProps> = ({ params }) => {
  const { styleName } = React.use(params); // "White Shaker"
  const [selectedTypeIdx, setSelectedTypeIdx] = useState(0);

  const filteredProductTypes = productTypes.filter((product) =>
    product.products.some((product) => product.availableStyles.includes(styleName))
  );

  if (filteredProductTypes.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-2xl font-semibold text-gray-700">
          No products available for this style.
        </h2>
      </div>
    );
  }

  const selectedType = filteredProductTypes[selectedTypeIdx];

  return (
    <div className="flex flex-col min-h-screen py-12">
      <div className="max-w-7xl w-full">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>

        {/* Product Type Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filteredProductTypes.map((type, idx) => (
            <button
              key={type.name}
              className={`px-6 py-3 text-sm font-medium transition-all duration-200 ${
                idx === selectedTypeIdx
                  ? 'bg-brand text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
              onClick={() => setSelectedTypeIdx(idx)}
            >
              {type.name}
            </button>
          ))}
        </div>

        {/* Selected Type Description */}
        <p className="text-gray-600 mb-8 max-w-3xl">{selectedType.description}</p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {selectedType.products.map((product) => (
            <div
              key={product.description}
              className="group relative bg-white border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="overflow-hidden bg-gray-100">
                <Image
                  src={`/assets/${product.image}`}
                  alt={product.description}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand/95 to-brand-800/95 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <div className="absolute inset-0 flex flex-col p-6 text-white overflow-y-auto">
                  {/* <div className="flex-none">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-sm mb-4 text-gray-100">{product.description}</p>
                  </div> */}

                  {product.features && (
                    <div>
                      <p className="text-sm font-medium mb-2 text-brand-50">Features:</p>
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((style) => (
                          <span key={style} className="text-xs bg-white/10 px-2 py-1">
                            {style}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex-grow space-y-4 mt-4">
                    <div>
                      <p className="text-sm font-medium mb-2 text-brand-50">Available Variants:</p>
                      <ul className="text-xs space-y-2">
                        {product.variants.map((variant) => (
                          <li
                            key={variant.code}
                            className="flex justify-between items-center bg-white/10 p-2"
                          >
                            <span className="font-medium text-brand-50">{variant.code}</span>
                            <span className="text-gray-200">{variant.dimensions}</span>
                            <span className="text-gray-200">{variant.weight} LB</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StylePage;
