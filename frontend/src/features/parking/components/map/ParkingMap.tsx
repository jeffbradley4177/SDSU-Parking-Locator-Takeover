import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { configureLeafletIcons, DEFAULT_MAP_CONFIG } from "@/shared/utils";
import { PARKING_LOT_LOCATIONS } from "@/shared/constants";

export function HomeMap() {
  // Configure Leaflet icons once on mount
  useEffect(() => {
    configureLeafletIcons();
  }, []);

  return (
    <MapContainer
      center={DEFAULT_MAP_CONFIG.center}
      zoom={DEFAULT_MAP_CONFIG.zoom}
      className="h-[300px] w-full rounded-[var(--component-map-radius)]"
    >
      <TileLayer
        attribution={DEFAULT_MAP_CONFIG.tileLayerAttribution}
        url={DEFAULT_MAP_CONFIG.tileLayerUrl}
      />
      {PARKING_LOT_LOCATIONS.map((lot, index) => (
        <Marker key={index} position={lot.coords}>
          <Popup>{lot.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
