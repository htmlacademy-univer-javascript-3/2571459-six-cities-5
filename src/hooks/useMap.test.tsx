import { renderHook } from '@testing-library/react';
import { useMap } from './useMap';
import leaflet from 'leaflet';

describe('useMap', () => {
  const city = { lat: 52.370216, lng: 4.895168, zoom: 12 };

  it('should initialize map instance', () => {
    const mapElement = document.createElement('div');
    const mapRef = { current: mapElement };

    const { result } = renderHook(() => useMap(mapRef, city));

    expect(result.current).toBeInstanceOf(leaflet.Map);
    expect(result.current?.getCenter()).toEqual(leaflet.latLng(city.lat, city.lng));
    expect(result.current?.getZoom()).toBe(city.zoom);
  });

  it('should return null if mapRef is null', () => {
    const { result } = renderHook(() => useMap({ current: null }, city));

    expect(result.current).toBeNull();
  });
});
