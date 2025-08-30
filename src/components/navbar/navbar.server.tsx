import React from 'react';
import Logo from './logo.client';
import MenuLink from '../ui-lib/menu-link';
import MobileMenuWrapper from './mobile-menu-wrapper';
import CartButton from './cart-button.client';

const NavBar = () => {
  return (
    <nav className="py-4 flex items-center justify-between">
      <Logo />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {/* <MenuLink href="/products" >
          Products
        </MenuLink> */}
        <MenuLink href="/gallery">Gallery</MenuLink>
        <MenuLink href="/about">About</MenuLink>
        <MenuLink href="/contact">Contact</MenuLink>
        <CartButton />
      </div>

      {/* Mobile Menu Components */}
      <MobileMenuWrapper />
    </nav>
  );
};

export default NavBar;
