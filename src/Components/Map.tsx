import {useEffect, useRef} from 'react';
import {useMap} from '../hooks/useMap.ts';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useAppStoreSelector} from '../hooks/useAppStoreStore.ts';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '@constants';
import {Offer} from '@types';


type MapProps = {
  offers: Offer[];
  width: string;
  height: string;
}

export function Map({offers, width, height}: MapProps){
  const mapRef = useRef<HTMLDivElement | null>(null);
  const hoveredOffer = useAppStoreSelector((state) => state.hoveredOffer);
  const selectedCity = useAppStoreSelector((state) => state.selectedCity);
  const map = useMap(mapRef, {lat: selectedCity.location.latitude, lng: selectedCity.location.longitude, zoom: 12});

  const defaultIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const selectedIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      map.setView([selectedCity.location.latitude, selectedCity.location.longitude], 12);

      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === hoveredOffer?.id)
              ? selectedIcon
              : defaultIcon,
          })
          .addTo(map);
      });
    }
  }, [selectedIcon, defaultIcon, map, offers, hoveredOffer, selectedCity]);

  return (
    <div
      style={{ height: height, width: width }}
      ref={mapRef}
    >
    </div>
  );
}
