import { Outlet } from "react-router-dom";
import { Navigation, type NavigationLink } from "@/shared/components/navigation";

const navigationLinks: NavigationLink[] = [
  { to: "/", label: "Home" },
  { to: "/map", label: "Map" },
  { to: "/about", label: "About" },
  { to: "/profile", label: "Profile" },
];

export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--component-page-bg)] text-[var(--semantic-text-primary)]">
      <Navigation links={navigationLinks} />
      <main className="p-[var(--component-page-padding-block)]">
        <Outlet />
      </main>
    </div>
  );
};
