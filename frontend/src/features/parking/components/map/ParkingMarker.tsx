import { memo } from "react";
import { Marker, MarkerPin } from "@/shared/components/googlemaps";

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
    <Marker position={position} title={title}>
      <MarkerPin title={title} />
    </Marker>
  );
});

ParkingMarker.displayName = "ParkingMarker";
