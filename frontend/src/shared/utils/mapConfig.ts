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
