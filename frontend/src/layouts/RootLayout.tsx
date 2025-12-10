import { Outlet } from "react-router-dom";
import { Navigation, type NavigationLink } from "@/features/navigation";

const navigationLinks: NavigationLink[] = [
  { to: "/", label: "Home" },
  { to: "/map", label: "Map" },
  { to: "/about", label: "About" },
  { to: "/profile", label: "Profile" },
];

export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--component-page-bg)] text-[var(--semantic-text-primary)]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation links={navigationLinks} />
      </div>
      <main className="pt-[var(--component-nav-height)] p-[var(--component-page-padding-block)]">
        <Outlet />
      </main>
    </div>
  );
};
