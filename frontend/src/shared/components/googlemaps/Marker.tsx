import { memo, type ReactNode } from "react";
import { AdvancedMarker } from '@vis.gl/react-google-maps';

export interface MarkerProps {
  /** Latitude and longitude coordinates */
  position: [number, number];
  /** Optional title/tooltip for the marker */
  title?: string;
  /** Custom content to render inside the marker */
  children?: ReactNode;
}

export const Marker = memo(function Marker({
  position,
  title,
  children
}: MarkerProps) {
  return (
    <AdvancedMarker
      position={{ lat: position[0], lng: position[1] }}
      title={title}
    >
      {children}
    </AdvancedMarker>
  );
});

Marker.displayName = "Marker";
