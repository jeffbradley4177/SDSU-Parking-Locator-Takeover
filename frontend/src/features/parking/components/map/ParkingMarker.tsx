import { memo } from "react";
import { Marker } from "react-leaflet";

export interface ParkingMarkerProps {
  /** Latitude and longitude coordinates */
  position: [number, number];
  /** Optional title/tooltip for the marker */
  title?: string;
}

export const ParkingMarker = memo(function ParkingMarker({
  position,
  title
}: ParkingMarkerProps) {
  return (
    <Marker position={position} title={title} />
  );
});

ParkingMarker.displayName = "ParkingMarker";
