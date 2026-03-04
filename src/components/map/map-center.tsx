import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

export default function MapCenter({ lat, lon }: { lat: number; lon: number }) {
  const map = useMap();

  useEffect(() => {
    if (lat && lon) {
      map.panTo([lat, lon], {
        animate: true,
        duration: 1,
        easeLinearity: 0.2,
      });
    }
  }, [lat, lon, map]);

  return null;
}
