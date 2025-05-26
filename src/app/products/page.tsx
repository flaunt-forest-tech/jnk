'use client';

import { useState } from "react";
import { productTypes } from "../../../assets/mock-products-data";

const productImage = "https://cdn.prod.website-files.com/658e0f2123ee3a398167d04f/67feb3ac5c609454b94e8066_E1.avif";

export default function Products() {
  const [selectedTypeIdx, setSelectedTypeIdx] = useState(0);
  const selectedType = productTypes[selectedTypeIdx];

  return (
    <div className="flex flex-col min-h-screen py-12">
      <div className="max-w-7xl w-full">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>
        
        {/* Product Type Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {productTypes.map((type, idx) => (
            <button
              key={type.name}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                idx === selectedTypeIdx
                  ? "bg-brand text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
              onClick={() => setSelectedTypeIdx(idx)}
            >
              {type.name}
            </button>
          ))}
        </div>

        {/* Selected Type Description */}
        <p className="text-gray-600 mb-8 max-w-3xl">
          {selectedType.description}
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {selectedType.products.map((product) => (
            <div
              key={product.name}
              className="group relative bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={productImage}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand/95 to-brand-800/95 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <div className="absolute inset-0 flex flex-col p-6 text-white overflow-y-auto">
                  <div className="flex-none">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-sm mb-4 text-gray-100">{product.description}</p>
                  </div>
                  
                  <div className="flex-grow space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2 text-brand-50">Available Variants:</p>
                      <ul className="text-xs space-y-2">
                        {product.variants.map((variant) => (
                          <li key={variant.code} className="flex justify-between items-center bg-white/10 p-2 rounded">
                            <span className="font-medium text-brand-50">{variant.code}</span>
                            <span className="text-gray-200">{variant.dimensions}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {product.availableStyles && (
                      <div>
                        <p className="text-sm font-medium mb-2 text-brand-50">Available Styles:</p>
                        <div className="flex flex-wrap gap-2">
                          {product.availableStyles.map((style) => (
                            <span key={style} className="text-xs bg-white/10 px-2 py-1 rounded">
                              {style}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
