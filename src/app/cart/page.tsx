'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/cart-context';

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

export default function CartPage() {
  const { items, increment, setQuantity, remove, clear, subtotalCents, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <section className="py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h1>
        <div className="bg-white border border-gray-200 p-8 text-center">
          <p className="text-gray-700">Your cart is empty.</p>
          <div className="mt-6">
            <Link href="/" className="px-4 py-2 bg-brand text-white rounded-md">
              Continue shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white border border-gray-200 p-4"
            >
              <div className="relative w-20 h-20 bg-gray-100 flex-shrink-0">
                {item.image ? (
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-100" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-500">{item.styleName}</div>
                <div className="font-medium text-gray-900 truncate">{item.title}</div>
                <div className="text-sm text-gray-600">
                  {item.optionCode} · {item.size}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => increment(item.id, -1)}
                  className="h-8 w-8 border border-gray-300 text-gray-700"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => setQuantity(item.id, Number(e.target.value))}
                  className="w-14 h-8 border border-gray-300 text-center"
                  aria-label="Quantity"
                />
                <button
                  onClick={() => increment(item.id, 1)}
                  className="h-8 w-8 border border-gray-300 text-gray-700"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <div className="w-24 text-right font-semibold">
                {formatPrice(item.unitPriceCents * item.quantity)}
              </div>
              <button onClick={() => remove(item.id)} className="text-sm text-red-600 ml-2">
                Remove
              </button>
            </div>
          ))}
        </div>

        <aside className="bg-white border border-gray-200 p-6 h-fit">
          <div className="flex justify-between text-gray-700">
            <span>Items</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-between text-gray-900 font-semibold mt-2">
            <span>Subtotal</span>
            <span>{formatPrice(subtotalCents)}</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">Taxes and shipping calculated at checkout.</p>
          <button onClick={clear} className="mt-6 w-full border border-gray-300 py-2">
            Clear cart
          </button>
        </aside>
      </div>
    </section>
  );
}
