'use client';

import React from 'react';
import { CartProvider } from './cart-context';

export default function CartRootProvider({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
