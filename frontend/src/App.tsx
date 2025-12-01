import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Map } from "./pages/Map";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { RootLayout } from "./layouts";

function App() {
  return (
    <Routes>
      {/* Login page - standalone without RootLayout */}
      <Route path="/login" element={<Login />} />
      
      {/* Main app routes with RootLayout */}
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

