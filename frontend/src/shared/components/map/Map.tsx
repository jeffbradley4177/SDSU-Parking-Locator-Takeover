import { cn } from "@/lib/cn";
import { forwardRef, memo, useEffect, type ComponentPropsWithoutRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { configureLeafletIcons } from "@/shared/utils";

const BASE_CLASSES = [
  "w-full h-full rounded-[var(--component-map-radius)]",
].join(" ");

export type MapStyle = "default" | "light" | "dark" | "terrain" | "toner";

const MAP_STYLES: Record<MapStyle, { url: string; attribution: string }> = {
  default: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  },
  light: {
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> &copy; <a href="https://carto.com/">CartoDB</a>',
  },
  dark: {
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> &copy; <a href="https://carto.com/">CartoDB</a>',
  },
  terrain: {
    url: "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg",
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>',
  },
  toner: {
    url: "https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>',
  },
};

export interface MapMarker {
  position: [number, number];
  popup?: React.ReactNode;
  key?: string | number;
}

export interface MapProps extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  /** Center coordinates [latitude, longitude] */
  center: [number, number];
  /** Zoom level (1-18) */
  zoom?: number;
  /** Array of markers to display */
  markers?: MapMarker[];
  /** Map style preset */
  mapStyle?: MapStyle;
  /** Tile layer URL (overrides mapStyle) */
  tileLayerUrl?: string;
  /** Tile layer attribution (overrides mapStyle) */
  tileLayerAttribution?: string;
}

/**
 * Leaflet-based map component for displaying parking locations.
 * 
 * This component fills 100% of its parent container. Wrap it in a sized container
 * to control its dimensions:
 * 
 * @example
 * ```tsx
 * // Full page map
 * <div className="h-screen">
 *   <Map center={[32.775, -117.071]} zoom={17} markers={parkingMarkers} />
 * </div>
 * 
 * // With map style
 * <Map center={[32.775, -117.071]} zoom={17} mapStyle="dark" />
 * 
 * // In a Container component
 * <Container minWidth="lg">
 *   <div className="h-[500px]">
 *     <Map center={[32.775, -117.071]} zoom={17} />
 *   </div>
 * </Container>
 * ```
 *
 * Uses OpenStreetMap tiles and supports custom markers. This is a lightweight,
 * free alternative to Google Maps. No API key required.
 *
 * Available map styles:
 * - `default`: Standard OpenStreetMap
 * - `light`: CartoDB Positron (minimal light theme)
 * - `dark`: CartoDB Dark Matter (dark theme)
 * - `terrain`: Stamen Terrain (topographic)
 * - `toner`: Stamen Toner (high contrast black & white)
 *
 * For Google Maps features, use the GoogleMaps component instead.
 *
 * @see GoogleMaps for Google Maps API integration
 * @see README.md in this directory for usage guidelines and comparison
 */
export const Map = memo(
  forwardRef<HTMLDivElement, MapProps>(function Map(
    {
      center,
      zoom = 17,
      markers = [],
      mapStyle = "default",
      tileLayerUrl,
      tileLayerAttribution,
      className,
      ...rest
    },
    ref,
  ) {
    // Configure Leaflet icons once on mount
    useEffect(() => {
      configureLeafletIcons();
    }, []);

    // Use custom URL/attribution if provided, otherwise use mapStyle preset
    const tileConfig = tileLayerUrl && tileLayerAttribution
      ? { url: tileLayerUrl, attribution: tileLayerAttribution }
      : MAP_STYLES[mapStyle];

    const wrapperClasses = cn(BASE_CLASSES, className);

    return (
      <div ref={ref} className={wrapperClasses} {...rest}>
        <MapContainer
          center={center}
          zoom={zoom}
          className="w-full h-full rounded-[var(--component-map-radius)]"
        >
          <TileLayer
            attribution={tileConfig.attribution}
            url={tileConfig.url}
          />
          {markers.map((marker, index) => (
            <Marker key={marker.key ?? index} position={marker.position}>
              {marker.popup && <Popup>{marker.popup}</Popup>}
            </Marker>
          ))}
        </MapContainer>
      </div>
    );
  }),
);

Map.displayName = "Map";