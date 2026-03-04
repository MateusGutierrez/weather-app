import { useEffect } from 'react';
import { MaptilerLayer } from '@maptiler/leaflet-maptilersdk';
import { useTheme } from '@/providers/theme-provider';
import { useMap } from 'react-leaflet';

export default function MapTilerLayerComponent() {
  const map = useMap();
  const { theme } = useTheme();

  useEffect(() => {
    const mtLayer = new MaptilerLayer({
      apiKey: import.meta.env.VITE_MAP_API_KEY,
      style: theme === 'light' ? 'basic' : 'basic-dark',
    });
    mtLayer.addTo(map);
    return () => {
      map.removeLayer(mtLayer);
    };
  }, [map, theme]);

  return null;
}
