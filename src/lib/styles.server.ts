import fs from 'fs/promises';
import path from 'path';
import { CabinetStyleType } from './types';

function toPascalNoSpaces(input: string): string {
  return input
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '');
}

function parseStyleFromFileName(fileName: string, index: number): CabinetStyleType {
  const base = fileName.replace(/\.(png|jpg|jpeg|webp|avif)$/i, '');
  const [rawDisplayName, rawCode] = base.split(' - ');
  const displayName = rawDisplayName?.trim() || base;
  const code = rawCode?.trim() || '';
  const name = toPascalNoSpaces(displayName);

  return {
    name,
    displayName,
    code,
    fileName,
    order: index + 1,
  };
}

export async function loadCabinetStyles(): Promise<CabinetStyleType[]> {
  const dir = path.join(process.cwd(), 'public', 'assets', 'CabinetStyles');
  let entries: string[] = [];
  try {
    entries = await fs.readdir(dir);
  } catch {
    return [];
  }

  const files = entries.filter((f) => /\.(png|jpg|jpeg|webp|avif)$/i.test(f));
  const sorted = files.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  return sorted.map((file, idx) => parseStyleFromFileName(file, idx));
}
