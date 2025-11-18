import { ParkingMapView } from "@/features/parking/components/map";
import { ParkingLotList } from "@/features/parking/components/display/ParkingLotList";

export const Home = () => {
  return (
    <div className="fixed inset-0 top-[var(--component-nav-height)]">
      {/* Fullscreen Map Background */}
      <div className="absolute inset-0 z-0">
        <ParkingMapView mapStyle="light" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-20 pointer-events-none h-full">
        {/* Parking Lot List Overlay */}
        <div className="absolute bottom-[var(--component-page-gap-comfortable)] left-[var(--component-page-padding-inline)] right-[var(--component-page-padding-inline)] pointer-events-auto">
          <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-lg border border-gray-200 max-h-[60vh] overflow-auto">
            <section className="p-[var(--component-page-padding-inline)]">
              <h2 className="mb-[var(--component-page-gap-default)] text-xl font-semibold">
                SDSU Parking Availability
              </h2>
              <p className="mb-[var(--component-page-gap-default)] opacity-85 text-sm">
                View current parking lot conditions and help keep the information updated by submitting your own report.
              </p>
              <ParkingLotList />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
