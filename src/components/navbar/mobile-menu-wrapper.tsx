'use client';

import React, { useState } from 'react';
import HamburgerMenu from '../ui-lib/hamburger-menu';
import MobileMenu from '../ui-lib/mobile-menu';

const MobileMenuWrapper = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HamburgerMenu 
        className="md:hidden" 
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <MobileMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default MobileMenuWrapper; 