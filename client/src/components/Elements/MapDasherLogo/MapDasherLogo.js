import React from 'react';
import MapDasherImg from '../../../assetts/images/mapdasher.webp';

const MapDasherLogo = ({gameActive}) => {
  return (
    <img 
      src={MapDasherImg} 
      alt="MapDasher | Geopgraphy Map Game" 
      title="MapDasher | Geopgraphy Map Game" 
      width="451"
      height="274"
      className={`${gameActive ? 'max-h-16' : 'max-h-fit'} md:max-h-fit w-auto`}
    />
  );
};

export default MapDasherLogo;