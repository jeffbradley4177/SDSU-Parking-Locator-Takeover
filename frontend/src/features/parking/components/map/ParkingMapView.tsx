import { Map, type MapProps } from "@/shared/components/map";
import { PARKING_LOT_LOCATIONS } from "@/shared/constants";
import { SDSU_CENTER_COORDS, DEFAULT_MAP_CONFIG, tealMarkerIcon } from "@/shared/utils";

export interface ParkingMapViewProps extends Omit<MapProps, "center" | "markers"> {
  /** Override default center (defaults to SDSU campus center) */
  center?: [number, number];
  /** Show parking lot markers (default: true) */
  showParkingLots?: boolean;
}

export function ParkingMapView({
  center = SDSU_CENTER_COORDS,
  showParkingLots = true,
  zoom = DEFAULT_MAP_CONFIG.zoom,
  ...props
}: ParkingMapViewProps) {
  const tealIcon = tealMarkerIcon();
  
  const markers = showParkingLots
    ? PARKING_LOT_LOCATIONS.map((lot) => ({
        position: lot.coords,
        popup: lot.name,
        key: lot.name,
        icon: tealIcon,
      }))
    : [];

  return (
    <Map
      center={center}
      zoom={zoom}
      markers={markers}
      {...props}
    />
  );
}
