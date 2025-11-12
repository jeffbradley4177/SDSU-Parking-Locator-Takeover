import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Map } from './pages/Map';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import Message from './shared/components/Message';
import ParkingLotList from './features/parking/components/ParkingLotList';
import { Navigation } from './features/navigation/components/Navigation';

function App() {
  return (
    <div >
      <Navigation />

      {/* --- Page Routing --- */}
      <Routes>
        {/* Home Page (main app content) */}
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

        {/* Other Pages */}
        <Route path="/map" element={<Map />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

