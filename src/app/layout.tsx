import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import NavBar from '@/components/navbar/navbar.server';
import { LAYOUT } from '@/constants/layout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'J&K Cabinets',
  description: 'J&K Cabinets - Custom Cabinet Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="bg-white border-b">
          <div 
            className="mx-auto w-full px-6 lg:px-8"
            style={{
              maxWidth: LAYOUT.container.maxWidth,
            }}
          >
            <NavBar />
          </div>
        </header>

        <main className="flex-grow">
          <div 
            className="mx-auto w-full px-6 lg:px-8"
            style={{
              maxWidth: LAYOUT.container.maxWidth,
            }}
          >
            {children}
          </div>
        </main>

        <footer className="bg-gray-50 border-t">
          <div 
            className="mx-auto w-full px-6 lg:px-8 py-10"
            style={{
              maxWidth: LAYOUT.container.maxWidth,
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-600">
                © {new Date().getFullYear()} J&K Cabinets. All rights reserved.
              </div>
              <div className="mt-4 md:mt-0 flex space-x-6">
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
                  Privacy
                </Link>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
                  Terms
                </Link>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
