import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { DoorStyle } from '@/constants/data/door-styles.types';

interface StyleThumbnailProps {
  doorStyle: DoorStyle;
}
const StyleThumbnail: React.FC<StyleThumbnailProps> = ({ doorStyle }) => {
  return (
    <Card className="w-[173px] h-[274px] max-w-xs shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-[210px] aspect-square w-full overflow-hidden">
        <Image
          src={`/assets/DoorStyles/${doorStyle.fileName}`}
          alt={doorStyle.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {doorStyle.name} ({doorStyle.code})
        </h3>
      </CardContent>
    </Card>
  );
};

export default StyleThumbnail;
