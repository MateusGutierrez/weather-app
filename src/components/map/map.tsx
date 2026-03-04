import type { MapTypeEnum } from '@/utils/map-type-enum';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import MapTilerLayerComponent from './map-tiler-layer';
import { Loading } from '../loading';
import MapCenter from './map-center';
import MapClick from './map-click';

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Map({
  lat,
  lon,
  type,
  onMapClick,
}: {
  lat: number;
  lon: number;
  type: MapTypeEnum;
  onMapClick: (lat: number, lon: number) => void;
}) {
  return (
    <>
      {lat && lon ? (
        <MapContainer center={[lat, lon]} zoom={5} style={{ height: '100%', width: '100%' }}>
          <MapTilerLayerComponent />
          <MapCenter lat={lat} lon={lon} />
          <MapClick onMapClick={onMapClick} />
          <Marker position={[lat, lon]} />
          <TileLayer
            attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
            url={`https://tile.openweathermap.org/map/${type}/{z}/{x}/{y}.png?appid=${API_KEY}`}
            opacity={0.7}
          />
        </MapContainer>
      ) : (
        <Loading />
      )}
    </>
  );
}
