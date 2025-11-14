import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Map } from "./Map";
import { About } from "./About";
import { Profile } from "./Profile";
import { Message } from "@/shared/components/Message";
import { ParkingLotList } from "@/features/parking/components/display/ParkingLotList";
import { RootLayout } from "../layouts";

function AppPage() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Message />
              <section style={{ marginTop: "2rem" }}>
                <h1 style={{ marginBottom: "1rem" }}>SDSU Parking Availability</h1>
                <p style={{ marginBottom: "1rem", opacity: 0.85 }}>
                  View current parking lot conditions and help keep the information updated by submitting your own report.
                </p>
                <ParkingLotList />
              </section>
              <div></div>
            </>
          }
        />

        <Route path="/map" element={<Map />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default AppPage;
