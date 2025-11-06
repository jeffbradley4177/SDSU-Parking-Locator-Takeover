import carParkingImg from "../shared/assets/images/map-header.webp";
import parklot from "../shared/assets/images/isometric-scene-of-parking-spot-in-highway-traffic-road-with-car-vector.jpg";
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
