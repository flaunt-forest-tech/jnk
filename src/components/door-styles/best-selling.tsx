import React from 'react';
import StyleThumbnail from './style-thumbnail';
import { DOOR_STYLES } from '@/constants/data/door-styles.types';

const BestSellingDoorStyle: React.FC = () => {
  return (
    <div>
      <h2 className="font-bold  text-5xl text-black-900 text-center">Best Selling Door Styles</h2> 
      <div className='mt-6 flex flex-wrap gap-4 justify-items-start'>
        {DOOR_STYLES.filter(e => e.bestSelling).map(style => <StyleThumbnail doorStyle={style} key={style.name} />)}
      </div>
    </div>
  );
};

export default BestSellingDoorStyle;
