'use client';

import Link from 'next/link';
import { useCart } from '@/contexts/cart-context';

export default function CartButton() {
  const { totalItems } = useCart();
  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand border border-gray-200 rounded-md hover:border-brand transition-colors"
      aria-label="View cart"
    >
      <span className="mr-2">Cart</span>
      <span className="inline-flex items-center justify-center min-w-6 h-6 px-2 text-xs font-semibold text-white bg-brand rounded-full">
        {totalItems}
      </span>
    </Link>
  );
}
