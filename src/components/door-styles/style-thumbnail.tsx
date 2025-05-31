import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { CabinetStyleType } from '@/constants/data/door-styles.types';

interface StyleThumbnailProps {
  cabinetStyle: CabinetStyleType;
}
const StyleThumbnail: React.FC<StyleThumbnailProps> = ({ cabinetStyle }) => {
  return (
    <Card className="w-[173px] h-[274px] max-w-xs shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-[210px] aspect-square w-full overflow-hidden">
        <Image
          src={`/assets/CabinetStyles/${cabinetStyle.fileName}`}
          alt={cabinetStyle.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {cabinetStyle.name} ({cabinetStyle.code})
        </h3>
      </CardContent>
    </Card>
  );
};

export default StyleThumbnail;
