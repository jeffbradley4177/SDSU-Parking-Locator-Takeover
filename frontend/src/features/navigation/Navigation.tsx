import { cn } from "@/lib/cn";
import { Monogram } from "@/shared/components/logo";
import { Icon } from "@/shared/components/icon";
import { BiMenu, BiUserCircle, BiLogIn } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";

export interface NavigationLink {
  to: string;
  label: string;
}

export interface NavigationProps {
  brandName?: string;
  links?: NavigationLink[];
}

export function Navigation({
  brandName = "SDSU Parking Locator",
}: NavigationProps) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleProfileClick = () => {
    if (isAuthenticated) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav
      className={cn(
        "w-full",
        "bg-[var(--component-nav-bg)]",
        "text-[var(--component-nav-text)]",
        "rounded-[length:var(--component-nav-radius)]",
        "flex items-center justify-between",
        "shrink-0"
      )}
      style={{
        height: "var(--component-nav-height)",
        paddingBlock: "var(--component-nav-padding-block)",
        paddingInline: "var(--component-nav-padding-inline)",
        gap: "var(--component-nav-gap)",
      }}
    >
      {/* Menu Icon - Left */}
      <div className="flex items-center justify-center h-[44px] w-[44px] text-[var(--component-nav-icon)]">
        <Icon icon={BiMenu} size="lg" color="current" />
      </div>

      {/* Logo Monogram - Center */}
      <Monogram variant="red" size="sm" alt={brandName} className="h-full max-h-full min-w-[20px]" />

      {/* Profile/Login Icon - Right */}
      <button
        onClick={handleProfileClick}
        className="flex items-center justify-center h-[44px] w-[44px] text-[var(--component-nav-icon)] hover:opacity-80 transition-opacity"
        aria-label={isAuthenticated ? "View profile" : "Login"}
      >
        <Icon
          icon={isAuthenticated ? BiUserCircle : BiLogIn}
          size="lg"
          color="current"
        />
      </button>
    </nav>
  );
}
