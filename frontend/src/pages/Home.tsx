import { HomeMap } from "../features/parking/components/ParkingMap";
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
    </div>
  );
};
