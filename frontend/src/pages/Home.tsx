import { HomeMap } from "../features/parking/components/ParkingMap";

export const Home = () => {
  return (
    <div>
      <div className="header-container">

        <h1>Welcome to the SDSU Parking Locator</h1>
      </div>
      <div className="map-container">
      <div className="map-img">
      < HomeMap/>
      </div>
      </div>
    </div>
  );
};
