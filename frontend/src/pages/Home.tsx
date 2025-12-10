import { ParkingMapView } from "@/features/parking/components/map";
import { ParkingLotList } from "@/features/parking/components/display/ParkingLotList";
import { Drawer } from "@/shared/components/drawer";
import { Text } from "@/shared/components/typography";
import { useState } from "react";

export const Home = () => {
  const [drawerState, setDrawerState] = useState<"collapsed" | "partial" | "full">("partial");

  return (
    <div className="fixed inset-0 top-[var(--component-nav-height)]">
      {/* Fullscreen Map Background */}
      <div className="absolute inset-0 z-0">
        <ParkingMapView mapStyle="light" rotatable showRotateControl />
      </div>

      {/* Drawer for all screen sizes */}
      <Drawer
        state={drawerState}
        onStateChange={setDrawerState}
        showScrim={true}
        closeOnScrimClick={true}
      >
        <section>
          <Text as="h2" level="h3" className="mb-[var(--component-page-gap-default)]">
            SDSU Parking Availability
          </Text>
          <Text variant="body-sm" color="secondary" className="mb-[var(--component-page-gap-default)]">
            View current parking lot conditions and help keep the information updated by submitting your own report.
          </Text>
          <ParkingLotList />
        </section>
      </Drawer>
    </div>
  );
};
