import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Map } from "./pages/Map";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { UnderDevelopment } from "./pages/UnderDevelopment";
import { RootLayout } from "./layouts";

function App() {
  return (
    <Routes>
      {/* Auth routes without navigation */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Main app routes with RootLayout (includes Navigation) */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/under-development" element={<UnderDevelopment />} />
      </Route>
    </Routes>
  );
}

export default App;

