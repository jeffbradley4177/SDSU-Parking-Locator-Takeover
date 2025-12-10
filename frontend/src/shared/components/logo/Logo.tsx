import { cn } from "@/lib/cn";
import { forwardRef, memo, type ComponentPropsWithoutRef } from "react";

export type LogoVariant = "primary-red" | "primary-black" | "primary-white";
export type LogoSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface LogoProps extends Omit<ComponentPropsWithoutRef<"img">, "src" | "alt"> {
  variant?: LogoVariant;
  size?: LogoSize;
  /** Alt text for accessibility (defaults to "SDSU Logo") */
  alt?: string;
}

const SIZE_CLASSES: Record<LogoSize, string> = {
  xs: "h-[var(--component-logo-size-xs)]",
  sm: "h-[var(--component-logo-size-sm)]",
  md: "h-[var(--component-logo-size-md)]",
  lg: "h-[var(--component-logo-size-lg)]",
  xl: "h-[var(--component-logo-size-xl)]",
};

const BASE_CLASSES = [
  "w-auto",
  "object-contain",
].join(" ");

const LOGO_ASSETS: Record<LogoVariant, string> = {
  "primary-red": new URL("@/shared/assets/logos/sdsu_primary_logo_rgb_horizontal_full_color.png", import.meta.url).href,
  "primary-black": new URL("@/shared/assets/logos/sdsu_primary-logo_rgb_horizontal_1_color_black.png", import.meta.url).href,
  "primary-white": new URL("@/shared/assets/logos/sdsu_primary_logo_rgb_horizontal_1_color_white.png", import.meta.url).href,
};

export const Logo = memo(
  forwardRef<HTMLImageElement, LogoProps>(function Logo(
    {
      variant = "primary-red",
      size = "md",
      alt = "SDSU Logo",
      className,
      ...props
    },
    ref
  ) {
    const logoPath = LOGO_ASSETS[variant];

    return (
      <img
        ref={ref}
        src={logoPath}
        alt={alt}
        className={cn(BASE_CLASSES, SIZE_CLASSES[size], className)}
        data-logo-variant={variant}
        data-logo-size={size}
        {...props}
      />
    );
  })
);

Logo.displayName = "Logo";
