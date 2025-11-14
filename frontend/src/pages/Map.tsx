import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { H1, Text } from "@/shared/components/typography";
import { configureLeafletIcons, DEFAULT_MAP_CONFIG } from "@/shared/utils";
import { PARKING_LOT_LOCATIONS } from "@/shared/constants";

export const Map = () => {
  // Configure Leaflet icons once on mount
  useEffect(() => {
    configureLeafletIcons();
  }, []);

  return (
    <div className="p-[var(--component-page-padding-block)]">
      <H1 className="mb-[var(--component-page-gap-default)]">SDSU Campus Map</H1>
      <Text className="mb-[var(--component-page-gap-default)]">
        Explore parking lots on the SDSU campus.
      </Text>

      <MapContainer
        center={DEFAULT_MAP_CONFIG.center}
        zoom={DEFAULT_MAP_CONFIG.zoom}
        className="h-[500px] w-full rounded-[var(--component-map-radius)]"
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
    </div>
  );
}
