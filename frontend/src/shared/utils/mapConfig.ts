import L from "leaflet";

/**
 * Type definition for Leaflet Icon.Default with _getIconUrl property
 */
interface LeafletIconDefault extends L.Icon.Default {
  _getIconUrl?: () => string;
}

/**
 * Configure Leaflet default marker icons for use with Vite/bundlers.
 * This fixes the default marker icon issue in Leaflet when used with modern bundlers.
 *
 * Call this function once before rendering any Leaflet maps.
 */
export function configureLeafletIcons(): void {
  const defaultIcon = L.Icon.Default.prototype as LeafletIconDefault;

  // Remove the default icon URL getter
  delete defaultIcon._getIconUrl;

  // Set the default icon URLs from CDN
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  });
}

/**
 * SDSU campus center coordinates
 */
export const SDSU_CENTER_COORDS: [number, number] = [32.775, -117.071];

/**
 * Default map configuration
 */
export const DEFAULT_MAP_CONFIG = {
  center: SDSU_CENTER_COORDS,
  zoom: 17,
  tileLayerUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  tileLayerAttribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
} as const;

/**
 * Custom  marker icon
 */
export function tealMarkerIcon(): L.Icon {
  return new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 41" width="25" height="41">
        <path fill="#006466" stroke="#ffffff" stroke-width="1.5" d="M12.5 0C5.6 0 0 5.6 0 12.5c0 1.9.4 3.7 1.2 5.3L12.5 41l11.3-23.2c.8-1.6 1.2-3.4 1.2-5.3C25 5.6 19.4 0 12.5 0z"/>
        <circle fill="#ffffff" cx="12.5" cy="12.5" r="6"/>
      </svg>
    `),
    iconRetinaUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 41" width="25" height="41">
        <path fill="#006466" stroke="#ffffff" stroke-width="1.5" d="M12.5 0C5.6 0 0 5.6 0 12.5c0 1.9.4 3.7 1.2 5.3L12.5 41l11.3-23.2c.8-1.6 1.2-3.4 1.2-5.3C25 5.6 19.4 0 12.5 0z"/>
        <circle fill="#ffffff" cx="12.5" cy="12.5" r="6"/>
      </svg>
    `),
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
}
