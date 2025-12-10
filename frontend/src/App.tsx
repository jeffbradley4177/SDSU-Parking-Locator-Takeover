import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Map } from "./pages/Map";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { UnderDevelopment } from "./pages/UnderDevelopment";
import { RootLayout } from "./layouts";

function App() {
  return (
    <Routes>
      {/* Main app routes with RootLayout (includes Navigation) */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/under-development" element={<UnderDevelopment />} />
      </Route>
    </Routes>
  );
}

export default App;

