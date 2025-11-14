import { H1, Text } from "@/shared/components/typography";
import { ParkingMapView } from "@/features/parking/components/map";

export const Map = () => {
  return (
    <div className="p-[var(--component-page-padding-block)]">
      <H1 className="mb-[var(--component-page-gap-default)]">SDSU Campus Map</H1>
      <Text className="mb-[var(--component-page-gap-default)]">
        Explore parking lots on the SDSU campus.
      </Text>

      <ParkingMapView size="large" />
    </div>
  );
}
