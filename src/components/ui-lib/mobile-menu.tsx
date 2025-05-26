'use client';

import React from 'react';
import MenuLink from './menu-link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div 
      className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-end p-4">
          <button
            className="p-2"
            onClick={onClose}
            aria-label="Close menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className="w-full h-0.5 bg-gray-900 transform rotate-45 translate-y-2" />
              <span className="w-full h-0.5 bg-gray-900 transform -rotate-45 -translate-y-2" />
            </div>
          </button>
        </div>
        
        <div className="flex flex-col items-center gap-8 p-8">
          <MenuLink href="/products" onClick={onClose}>
            Products
          </MenuLink>
          <MenuLink href="/gallery" onClick={onClose}>
            Gallery
          </MenuLink>
          <MenuLink href="/about" onClick={onClose}>
            About
          </MenuLink>
          <MenuLink href="/contact" onClick={onClose}>
            Contact
          </MenuLink>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu; 