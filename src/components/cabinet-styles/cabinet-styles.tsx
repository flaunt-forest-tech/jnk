'use client';
import React, { useState } from 'react';
import StyleThumbnail from './style-thumbnail';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import { CabinetStyleType } from '@/lib/types';

const VISIBLE_COUNT = 6;

interface CabinetStylesProps {
  styles: CabinetStyleType[];
}

const CabinetStyles: React.FC<CabinetStylesProps> = ({ styles }) => {
  const [index, setIndex] = useState(0);
  const total = styles.length;

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  // Get 7 visible styles with wrapping
  const visibleStyles = total
    ? Array.from({ length: Math.min(VISIBLE_COUNT, total) }, (_, i) => {
        const current = (index + i) % total;
        return styles[current];
      })
    : [];

  return (
    <div className="text-center">
      <h2 className="font-bold text-5xl text-black-900 mb-6">Cabinet styles</h2>
      {total === 0 ? (
        <p className="text-gray-600">No styles available.</p>
      ) : (
        <div className="flex items-center justify-center gap-4">
          <CircleChevronLeft onClick={handlePrev} />
          <div className="flex gap-4 flex-wrap justify-center">
            {visibleStyles.map((style) => (
              <StyleThumbnail key={style.name} cabinetStyle={style} />
            ))}
          </div>
          <CircleChevronRight onClick={handleNext} />
        </div>
      )}
    </div>
  );
};

export default CabinetStyles;
