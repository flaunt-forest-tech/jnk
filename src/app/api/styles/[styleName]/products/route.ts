import { NextRequest, NextResponse } from 'next/server';
import { loadMockCabinetStylesWithProducts } from '@/lib/styles.mock';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ styleName?: string | string[] | undefined }> }
) {
  try {
    const { styleName } = await params;
    const styleNameStr = Array.isArray(styleName) ? styleName[0] : (styleName ?? '');
    const all = await loadMockCabinetStylesWithProducts();
    const target = all.find(
      (s) => s.name.toLowerCase() === decodeURIComponent(styleNameStr).toLowerCase()
    );
    if (!target) {
      return NextResponse.json({ products: [] }, { status: 200 });
    }
    return NextResponse.json({ products: target.products }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Failed to load products' }, { status: 500 });
  }
}
