import React from 'react';
import Logo from './logo.client';
import MenuLink from '../ui-lib/menu-link';

const NavBar = () => {
  return (
    <nav className="py-4 flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-8">
        <MenuLink href="/products">
          Products
        </MenuLink>
      </div>
    </nav>
  );
};

export default NavBar;
