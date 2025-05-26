'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react';

const Logo = () => {
  const router = useRouter();
  return (
    <div className="flex items-center cursor-pointer" onClick={() => router.push('/')}>
      <Image
        src="/assets/logo-main.png"
        alt="J&K Cabinets Logo"
        width={120}
        height={32}
        className="h-8 w-auto"
        priority
      />
            <span className="text-2xl font-bold text-primary-900">J&K</span>
            <span className="text-xl text-primary-700 ml-1">Cabinets</span>
    </div>
  );
};

export default Logo;
