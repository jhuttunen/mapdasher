import React from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import GuessesLayer  from './GuessesLayer';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Define default marker icon for Leaflet
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({currentRoundAnswered, rounds, mapRef, locationPicker}) => {
  return(
    <MapContainer 
      ref={mapRef}
      center={[0,0]} 
      zoom={2} 
      scrollWheelZoom={true} 
      zoomSnap={0.1}
      worldCopyJump={true}
      zoomControl={false}
      id="game-map"
      style={{ width: '100%', height: '100vh' }}
    >
      {/*<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
      {/*<TileLayer url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png" />*/}
      {/* <TileLayer url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png' />*/}
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png" />
      <ZoomControl position="bottomright" />
      {locationPicker}
      {currentRoundAnswered ? (
        <GuessesLayer rounds={rounds} /> 
      ) : null }
    </MapContainer>
  );
};

export default Map;