'use client';

import React from 'react';
import Logo from './logo.client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();
  const isProductsPage = pathname === '/products';

  return (
    <nav className="py-4 flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-8">
        <Link 
          href="/" 
          className={`text-sm font-medium transition-colors duration-200 ${
            pathname === '/' 
              ? 'text-secondary-700' 
              : 'text-gray-700 hover:text-secondary-700'
          }`}
        >
          Home
        </Link>
        {!isProductsPage && (
          <Link 
            href="/products" 
            className="text-sm font-medium text-gray-700 hover:text-secondary-700 transition-colors duration-200"
          >
            Products
          </Link>
        )}
        {isProductsPage && (
          <span className="text-sm font-medium text-secondary-700">
            Products
          </span>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
