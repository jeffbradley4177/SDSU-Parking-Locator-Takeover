import carParkingImg from "../assets/images/map-header.webp";
import parklot from "../assets/images/isometric-scene-of-parking-spot-in-highway-traffic-road-with-car-vector.jpg";
import { HomeMap } from "../components/ParkingMap";

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
