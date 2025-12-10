import { cn } from "@/lib/cn";
import { forwardRef, memo, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { APIProvider, Map } from '@vis.gl/react-google-maps';

const BASE_CLASSES = [
  "w-full rounded-[var(--component-googlemaps-radius)]",
].join(" ");

const SIZE_STYLES: Record<GoogleMapsSize, string> = {
  default: "h-[length:var(--component-googlemaps-height-default)]",
  large: "h-[length:var(--component-googlemaps-height-large)]",
};

export type GoogleMapsSize = "default" | "large";

export interface GoogleMapsProps extends Omit<ComponentPropsWithoutRef<"div">, "children"> {
  /** Center coordinates [latitude, longitude] */
  center?: [number, number];
  /** Zoom level (1-20) */
  zoom?: number;
  /** Map size variant */
  size?: GoogleMapsSize;
  /** Map ID for styling (created in Google Cloud Console) */
  mapId?: string;
  /** Children to render inside the map (e.g., markers, overlays) */
  children?: ReactNode;
}

/**
 * Google Maps component with advanced marker support.
 *
 * Uses Google Maps JavaScript API for advanced features. Requires
 * VITE_GOOGLE_MAPS_API_KEY environment variable.
 *
 * For basic mapping needs without API requirements, consider using
 * the Map (Leaflet) component instead.
 *
 * @see Map for Leaflet-based free alternative
 * @see README.md in ../map/ directory for usage guidelines and comparison
 *
 * @example
 * ```tsx
 * <GoogleMaps center={[32.775, -117.071]} zoom={17}>
 *   <Marker position={[32.775, -117.071]} title="Location">
 *     <MarkerPin />
 *   </Marker>
 * </GoogleMaps>
 * ```
 */
export const GoogleMaps = memo(
  forwardRef<HTMLDivElement, GoogleMapsProps>(function GoogleMaps(
    {
      center = [32.775, -117.071], // SDSU campus default
      zoom = 17,
      size = "default",
      mapId,
      className,
      children,
      ...rest
    },
    ref,
  ) {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    const mapClasses = cn(BASE_CLASSES, SIZE_STYLES[size], className);

    // Error state: API key missing
    if (!apiKey) {
      return (
        <div
          ref={ref}
          data-map-size={size}
          className={cn(
            mapClasses,
            "flex items-center justify-center",
            "border border-[var(--component-googlemaps-error-border)]",
            "bg-[var(--component-googlemaps-error-bg)]"
          )}
          {...rest}
        >
          <div className="text-center p-6">
            <p className="text-lg font-semibold mb-2 text-[var(--component-googlemaps-error-text-primary)]">
              Google Maps API Key Missing
            </p>
            <p className="text-sm text-[var(--component-googlemaps-error-text-secondary)]">
              Please add VITE_GOOGLE_MAPS_API_KEY to your .env file
            </p>
          </div>
        </div>
      );
    }

    return (
      <div ref={ref} data-map-size={size} {...rest}>
        <APIProvider apiKey={apiKey}>
          <Map
            className={mapClasses}
            defaultCenter={{ lat: center[0], lng: center[1] }}
            defaultZoom={zoom}
            gestureHandling="greedy"
            disableDefaultUI={false}
            mapId={mapId}
          >
            {children}
          </Map>
        </APIProvider>
      </div>
    );
  }),
);

GoogleMaps.displayName = "GoogleMaps";
