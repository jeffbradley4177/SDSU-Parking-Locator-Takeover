import { memo } from "react";

export interface MarkerPinProps {
  /** Optional title/tooltip for the marker */
  title?: string;
}


export const MarkerPin = memo(function MarkerPin({ title }: MarkerPinProps) {
  return (
    <div
      style={{
        width: 'var(--component-googlemaps-marker-size)',
        height: 'var(--component-googlemaps-marker-size)',
        backgroundColor: 'var(--component-googlemaps-marker-bg)',
        border: '2px solid var(--component-googlemaps-marker-border)',
        borderRadius: '50% 50% 50% 0',
        transform: 'rotate(-45deg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      title={title}
    >
      <div
        style={{
          transform: 'rotate(45deg)',
          color: 'var(--component-googlemaps-marker-text-color)',
          fontSize: 'var(--component-googlemaps-marker-text-size)',
          fontWeight: 'var(--component-googlemaps-marker-text-weight)',
        }}
      >
        P
      </div>
    </div>
  );
});

MarkerPin.displayName = "MarkerPin";
