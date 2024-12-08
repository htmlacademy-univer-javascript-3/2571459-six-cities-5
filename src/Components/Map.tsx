import {useEffect, useRef} from 'react';
import {useMap} from '../hooks/useMap.tsx';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../const.ts';
import {Point} from '../mocks/MockHelpers.ts';
import {useStore} from '../hooks/useStore.ts';


type MapProps = {
  points: Point[];
  selectedPoint: Point | null;
  width: string;
  height: string;
}

export function Map({points, selectedPoint, width, height}: MapProps){
  const mapRef = useRef<HTMLDivElement | null>(null);
  const activeCity = useStore((state) => state.city);
  const map = useMap(mapRef, {lat: activeCity.lat, lng: activeCity.lng, zoom: 11});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      map.setView([activeCity.lat, activeCity.lng], 11);

      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          }, {
            icon: (point.name === selectedPoint?.name)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [currentCustomIcon, defaultCustomIcon, map, points, selectedPoint, activeCity]);

  return (
    <div
      style={{ height: height, width: width }}
      ref={mapRef}
    >
    </div>
  );
}
