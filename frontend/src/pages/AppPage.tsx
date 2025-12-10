import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Map } from "./Map";
import { About } from "./About";
import { Profile } from "./Profile";
import { Message } from "@/shared/components/message";
import { ParkingLotList } from "@/features/parking/components/display/ParkingLotList";
import { Text } from "@/shared/components/typography";
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
              <Message title="Here to help you find parking urgently" />
              <section style={{ marginTop: "2rem" }}>
                <Text as="h1" level="h1" className="mb-4">SDSU Parking Availability</Text>
                <Text color="secondary" className="mb-4">
                  View current parking lot conditions and help keep the information updated by submitting your own report.
                </Text>
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
