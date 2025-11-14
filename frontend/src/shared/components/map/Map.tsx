import { cn } from "@/lib/cn";
import { forwardRef, memo, useEffect, type ComponentPropsWithoutRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { configureLeafletIcons } from "@/shared/utils";

const BASE_CLASSES = [
  "w-full rounded-[var(--component-map-radius)]",
].join(" ");

const SIZE_STYLES: Record<MapSize, string> = {
  default: "h-[length:var(--component-map-height-default)]",
  large: "h-[length:var(--component-map-height-large)]",
};

export type MapSize = "default" | "large";

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
  /** Map size variant */
  size?: MapSize;
  /** Array of markers to display */
  markers?: MapMarker[];
  /** Tile layer URL (defaults to OpenStreetMap) */
  tileLayerUrl?: string;
  /** Tile layer attribution */
  tileLayerAttribution?: string;
}

/**
 * Leaflet-based map component for displaying parking locations.
 *
 * Uses OpenStreetMap tiles and supports custom markers. This is a lightweight,
 * free alternative to Google Maps. No API key required.
 *
 * For Google Maps features, use the GoogleMaps component instead.
 *
 * @see GoogleMaps for Google Maps API integration
 * @see README.md in this directory for usage guidelines and comparison
 *
 * @example
 * ```tsx
 * <Map center={[32.775, -117.071]} zoom={17} markers={parkingMarkers} />
 * ```
 */
export const Map = memo(
  forwardRef<HTMLDivElement, MapProps>(function Map(
    {
      center,
      zoom = 17,
      size = "default",
      markers = [],
      tileLayerUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      tileLayerAttribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      className,
      ...rest
    },
    ref,
  ) {
    // Configure Leaflet icons once on mount
    useEffect(() => {
      configureLeafletIcons();
    }, []);

    const mapClasses = cn(BASE_CLASSES, SIZE_STYLES[size], className);

    return (
      <div ref={ref} data-map-size={size} {...rest}>
        <MapContainer
          center={center}
          zoom={zoom}
          className={mapClasses}
        >
          <TileLayer
            attribution={tileLayerAttribution}
            url={tileLayerUrl}
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
