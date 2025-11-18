import { cn } from "@/lib/cn";
import { Monogram } from "@/shared/components/logo";
import { Icon } from "@/shared/components/icon";

export interface NavigationProps {
  brandName?: string;
}

export function Navigation({
  brandName = "SDSU Parking Locator",
}: NavigationProps) {
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
      <div className="flex items-center justify-center h-full text-[var(--component-nav-icon)]">
        <Icon name="menu" size="md" color="current" />
      </div>

      {/* Logo Monogram - Center */}
      <Monogram variant="red" size="sm" alt={brandName} className="h-full max-h-full min-w-[20px]" />

      {/* Profile Icon - Right */}
      <div className="flex items-center justify-center h-full text-[var(--component-nav-icon)]">
        <Icon name="user-circle" size="md" color="current" />
      </div>
    </nav>
  );
}
