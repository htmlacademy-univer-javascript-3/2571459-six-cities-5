import {useEffect, useRef} from 'react';
import {useMap} from '../hooks/useMap.tsx';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../const.ts';
import {Point} from '../mocks/MockHelpers.ts';


type City = {
  lat: number;
  lng: number;
  zoom: number;
}


type MapProps = {
  city: City;
  points: Point[];
  selectedPoint: Point | null;
  width: string;
  height: string;
}

export function Map({city, points, selectedPoint, width, height}: MapProps){
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

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
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          }, {
            icon: (point.title === selectedPoint?.title)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [currentCustomIcon, defaultCustomIcon, map, points, selectedPoint]);

  return (
    <div
      style={{ height: height, width: width }}
      ref={mapRef}
    >
    </div>
  );
}
