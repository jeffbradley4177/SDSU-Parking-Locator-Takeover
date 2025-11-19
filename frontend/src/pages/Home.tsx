import { ParkingMapView } from "@/features/parking/components/map";
import { ParkingLotList } from "@/features/parking/components/display/ParkingLotList";
import { Drawer } from "@/shared/components/drawer";
import { useState } from "react";

export const Home = () => {
  const [drawerState, setDrawerState] = useState<"collapsed" | "partial" | "full">("partial");

  return (
    <div className="fixed inset-0 top-[var(--component-nav-height)]">
      {/* Fullscreen Map Background */}
      <div className="absolute inset-0 z-0">
        <ParkingMapView mapStyle="light" />
      </div>

      {/* Drawer for all screen sizes */}
      <Drawer
        state={drawerState}
        onStateChange={setDrawerState}
        showScrim={true}
        closeOnScrimClick={true}
      >
        <section>
          <h2 className="mb-[var(--component-page-gap-default)] text-xl font-semibold">
            SDSU Parking Availability
          </h2>
          <p className="mb-[var(--component-page-gap-default)] opacity-85 text-sm">
            View current parking lot conditions and help keep the information updated by submitting your own report.
          </p>
          <ParkingLotList />
        </section>
      </Drawer>
    </div>
  );
};
