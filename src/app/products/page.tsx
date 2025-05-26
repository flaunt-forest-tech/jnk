'use client';

import { useState } from "react";
import { productTypes } from "../../../assets/mock-products-data";

const placeholderImg =
  "https://via.placeholder.com/300x200.png?text=Product+Image";

export default function Products() {
  const [selectedTypeIdx, setSelectedTypeIdx] = useState(0);
  const selectedType = productTypes[selectedTypeIdx];

  return (
    <div className="flex flex-col min-h-screen  py-12">
      <div className="max-w-7xl  w-full">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>
        
        {/* Product Type Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {productTypes.map((type, idx) => (
            <button
              key={type.name}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                idx === selectedTypeIdx
                  ? "bg-primary-900 text-white shadow-md"
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
              className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={placeholderImg}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-200 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-sm mb-4">{product.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Available Variants:</p>
                      <ul className="text-xs space-y-1">
                        {product.variants.map((variant) => (
                          <li key={variant.code} className="flex justify-between">
                            <span>{variant.code}</span>
                            <span>{variant.dimensions}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
