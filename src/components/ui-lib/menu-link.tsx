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
      <span className="text-sm font-semibold text-brand relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-brand">
        {children}
      </span>
    );
  }

  return (
    <Link 
      href={href} 
      className="text-sm font-medium text-gray-700 hover:text-brand transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-brand hover:after:w-full after:transition-all after:duration-200"
    >
      {children}
    </Link>
  );
};

export default MenuLink; 