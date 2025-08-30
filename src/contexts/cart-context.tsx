'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export interface CartItem {
  id: string; // unique key: styleName:productId:optionCode
  styleName: string;
  productId: string;
  title: string;
  optionCode: string;
  size: string;
  unitPriceCents: number;
  quantity: number;
  image?: string;
}

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'id'>) => void;
  increment: (id: string, delta?: number) => void;
  setQuantity: (id: string, quantity: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  totalItems: number; // sum of quantities
  subtotalCents: number;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = 'cart:v1';

function computeId(item: Omit<CartItem, 'id'>): string {
  return `${item.styleName}:${item.productId}:${item.optionCode}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const hydratedRef = useRef(false);

  // Load from localStorage once
  useEffect(() => {
    try {
      const raw = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed as CartItem[]);
      }
    } catch {
      // ignore
    } finally {
      hydratedRef.current = true;
    }
  }, []);

  // Persist on change
  useEffect(() => {
    if (!hydratedRef.current) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addItem = useCallback((input: Omit<CartItem, 'id'>) => {
    const id = computeId(input);
    setItems((prev) => {
      const existing = prev.find((p) => p.id === id);
      if (existing) {
        return prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + input.quantity } : p));
      }
      const next: CartItem = { ...input, id };
      return [...prev, next];
    });
  }, []);

  const increment = useCallback((id: string, delta: number = 1) => {
    setItems((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, quantity: Math.max(0, p.quantity + delta) } : p))
        .filter((p) => p.quantity > 0)
    );
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, quantity: Math.max(0, Math.floor(quantity || 0)) } : p))
        .filter((p) => p.quantity > 0)
    );
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const totalItems = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);
  const subtotalCents = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity * i.unitPriceCents, 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, addItem, increment, setQuantity, remove, clear, totalItems, subtotalCents }),
    [items, addItem, increment, setQuantity, remove, clear, totalItems, subtotalCents]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
