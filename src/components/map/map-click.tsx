import { useMap } from 'react-leaflet';

export default function MapClick({
  onMapClick,
}: {
  onMapClick: (lat: number, lon: number) => void;
}) {
  const map = useMap();
  map.on('click', e => {
    onMapClick(Number(e.latlng.lat.toFixed(7)), Number(e.latlng.lng.toFixed(7)));
  });
  return null;
}
