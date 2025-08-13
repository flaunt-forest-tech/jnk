'use client';
import React, { useState } from 'react';
import StyleThumbnail from './style-thumbnail';
import { CABINET_STYLES } from '@/constants/data/door-styles.types';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';

const VISIBLE_COUNT = 6;

const OtherCabinetStyle: React.FC = () => {
  const [index, setIndex] = useState(0);
  const total = CABINET_STYLES.length;

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  // Get 7 visible styles with wrapping
  const visibleStyles = Array.from({ length: VISIBLE_COUNT }, (_, i) => {
    const current = (index + i) % total;
    return CABINET_STYLES[current];
  });

  return (
    <div className="text-center">
      <h2 className="font-bold text-5xl text-black-900 mb-6">Cabinet styles</h2>
      <div className="flex items-center justify-center gap-4">
        <CircleChevronLeft onClick={handlePrev} />
        <div className="flex gap-4 flex-wrap justify-center">
          {visibleStyles.map((style) => (
            <StyleThumbnail key={style.name} cabinetStyle={style} />
          ))}
        </div>
        <CircleChevronRight onClick={handleNext} />
      </div>
    </div>
  );
};

export default OtherCabinetStyle;
