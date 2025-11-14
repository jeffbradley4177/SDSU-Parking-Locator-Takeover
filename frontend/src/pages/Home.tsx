import { HomeMap } from "@/features/parking/components/map/ParkingMap";
import { ParkingLotList } from "@/features/parking/components/display/ParkingLotList";
import { H1 } from "@/shared/components/typography";

export const Home = () => {
  return (
    <div>
      <div className="relative text-center">
        <H1>Welcome to the SDSU Parking Locator</H1>
      </div>

      <div className="p-[var(--component-page-padding-inline)] flex justify-center mt-[var(--component-page-gap-comfortable)] h-[var(--component-map-height-default)]">
        <div className="w-3/4">
          <HomeMap />
        </div>
      </div>

      <section className="mt-[var(--component-page-gap-comfortable)] p-[var(--component-page-padding-inline)]">
        <h2 className="mb-[var(--component-page-gap-default)]">SDSU Parking Availability</h2>
        <p className="mb-[var(--component-page-gap-default)] opacity-85">
          View current parking lot conditions and help keep the information updated by submitting your own report.
        </p>
        <ParkingLotList />
      </section>
    </div>
  );
};
