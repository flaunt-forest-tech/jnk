'use client';

import React, { useState } from 'react';
import HamburgerMenu from '../ui-lib/hamburger-menu';
import MobileMenu from '../ui-lib/mobile-menu';
import CartButton from './cart-button.client';

const MobileMenuWrapper = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center gap-3">
      <CartButton />
      <HamburgerMenu className="" isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default MobileMenuWrapper;
