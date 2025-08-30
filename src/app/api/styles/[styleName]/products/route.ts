import { NextResponse } from 'next/server';
import { loadMockCabinetStylesWithProducts } from '@/lib/styles.mock';

export async function GET(_req: Request, context: unknown) {
  try {
    const params = (context as { params?: { styleName?: string } })?.params || {};
    const all = await loadMockCabinetStylesWithProducts();
    const target = all.find(
      (s) => s.name.toLowerCase() === decodeURIComponent(params.styleName || '').toLowerCase()
    );
    if (!target) {
      return NextResponse.json({ products: [] }, { status: 200 });
    }
    return NextResponse.json({ products: target.products }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Failed to load products' }, { status: 500 });
  }
}
