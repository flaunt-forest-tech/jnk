'use client';

import React from 'react';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const HamburgerMenu = ({ isOpen, onClick, className = '' }: HamburgerMenuProps) => {
  return (
    <button
      className={`p-2 ${className}`}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <div className="w-6 h-5 relative flex flex-col justify-between">
        <span className={`w-full h-0.5 bg-gray-900 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-full h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`w-full h-0.5 bg-gray-900 transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </div>
    </button>
  );
};

export default HamburgerMenu; 