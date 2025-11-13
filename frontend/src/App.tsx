import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Map } from "./pages/Map";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { RootLayout } from "./layouts";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;

