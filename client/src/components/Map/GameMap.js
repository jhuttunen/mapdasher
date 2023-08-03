import React from 'react';
import { LayersControl, MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
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

const Map = ({currentRoundAnswered, rounds, mapRef, locationPicker, gameOver}) => {
  const { BaseLayer } = LayersControl;

  return(
    <MapContainer 
      ref={mapRef}
      center={[0,0]} 
      zoom={2.5} 
      minZoom={2.5}
      maxZoom={16}
      scrollWheelZoom={true} 
      zoomSnap={0.1}
      worldCopyJump={true}
      zoomControl={false}
      id="game-map"
      style={{ width: '100%', height: '100vh' }}
    >
      <ZoomControl position="bottomright" />
      <LayersControl position="bottomright">
        <BaseLayer checked name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
        </BaseLayer>
        <BaseLayer name="CartoDB Light No Labels">
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
        </BaseLayer>
        <BaseLayer name="Stamen Terrain No Labels">
          <TileLayer
            url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.png"
            attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </BaseLayer>
        <BaseLayer name="Stamen Watercolor No Labels">
          <TileLayer
            url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg" 
            attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </BaseLayer>
      </LayersControl>
      {locationPicker}
      {currentRoundAnswered ? (
        <GuessesLayer 
          rounds={rounds} 
          gameOver={gameOver}
        /> 
      ) : null }
    </MapContainer>
  );
};

export default Map;