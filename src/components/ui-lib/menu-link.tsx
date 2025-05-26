'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const MenuLink = ({ href, children, isActive }: MenuLinkProps) => {
  const pathname = usePathname();
  const isCurrentPage = pathname === href;

  if (isActive || isCurrentPage) {
    return (
      <span className="text-sm font-medium text-secondary-700">
        {children}
      </span>
    );
  }

  return (
    <Link 
      href={href} 
      className="text-sm font-medium text-gray-700 hover:text-secondary-700 transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

export default MenuLink; 