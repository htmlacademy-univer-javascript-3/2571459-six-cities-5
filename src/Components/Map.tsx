import {useEffect, useRef} from 'react';
import {useMap} from '../hooks/useMap.ts';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useAppStoreSelector} from '../hooks/useAppStoreStore.ts';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../constants/constants.ts';
import {Offer} from '../Types/Offer.ts';


type MapProps = {
  offers: Offer[];
  selectedOffer: Offer | null;
  width: string;
  height: string;
}

export function Map({offers, selectedOffer, width, height}: MapProps){
  const mapRef = useRef<HTMLDivElement | null>(null);
  const activeCity = useAppStoreSelector((state) => state.city);
  const map = useMap(mapRef, {lat: activeCity.location.latitude, lng: activeCity.location.longitude, zoom: 11});

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
      map.setView([activeCity.location.latitude, activeCity.location.longitude], 12);

      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.title === selectedOffer?.title)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [currentCustomIcon, defaultCustomIcon, map, offers, selectedOffer, activeCity]);

  return (
    <div
      style={{ height: height, width: width }}
      ref={mapRef}
    >
    </div>
  );
}
