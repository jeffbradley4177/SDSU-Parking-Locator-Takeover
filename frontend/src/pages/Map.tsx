import { H1, Text } from "@/shared/components/typography";
import { ParkingMapView } from "@/features/parking/components/map";
import { Container } from "@/shared/components/container";

export const Map = () => {
  return (
    <div className="p-[var(--component-page-padding-block)]">
      <Container minWidth="xl">
        <H1 className="mb-[var(--component-page-gap-default)]">SDSU Campus Map</H1>
        <Text className="mb-[var(--component-page-gap-default)]">
          Explore parking lots on the SDSU campus.
        </Text>

        <div className="h-[600px]">
          <ParkingMapView />
        </div>
      </Container>
    </div>
  );
}
