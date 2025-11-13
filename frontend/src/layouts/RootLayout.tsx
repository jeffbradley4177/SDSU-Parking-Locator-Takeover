import { Outlet } from "react-router-dom";
import { Navigation } from "@/shared/components/navigation";

export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--component-page-bg)] text-[var(--semantic-text-primary)]">
      <Navigation />
      <main className="p-[var(--component-page-padding-block)]">
        <Outlet />
      </main>
    </div>
  );
};
