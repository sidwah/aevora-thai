'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

interface LocationMapProps {
  lat: number;
  lng: number;
  className?: string;
  pinPosition?: 'center' | 'right';
}

const LocationMap: React.FC<LocationMapProps> = ({
  lat,
  lng,
  className = '',
  pinPosition = 'right',
}) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Calculate map center based on pin position
    const mapCenter: [number, number] =
      pinPosition === 'right'
        ? [lat, lng - 0.008] // Smaller offset for better positioning
        : [lat, lng];

    // Initialize map with fixed styling
    const map = L.map(mapContainerRef.current, {
      center: mapCenter,
      zoom: 16, // Increased zoom for better detail
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      dragging: false,
      touchZoom: false,
      boxZoom: false,
      keyboard: false,
    });

    // Use CartoDB Positron tiles (cleaner, no missing tile issues)
    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20,
        // Fix for missing tiles
        errorTileUrl:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==',
      }
    ).addTo(map);

    // Custom restaurant marker with enhanced styling
    const customIcon = L.divIcon({
      html: `
        <div class="custom-marker">
          <div class="marker-pin"></div>
          <div class="marker-pulse"></div>
          <div class="marker-glow"></div>
        </div>
      `,
      className: 'custom-marker-wrapper',
      iconSize: [32, 42],
      iconAnchor: [16, 42],
    });

    // Add marker at restaurant location
    L.marker([lat, lng], { icon: customIcon }).addTo(map);

    mapRef.current = map;

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [lat, lng, pinPosition]);

  return (
    <div
      ref={mapContainerRef}
      className={`h-full w-full ${className}`}
      style={{
        background: '#f8f9fa', // Fallback background
        minHeight: '100%',
      }}
    />
  );
};

export default LocationMap;
