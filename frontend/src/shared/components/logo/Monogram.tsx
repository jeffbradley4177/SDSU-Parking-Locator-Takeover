import { cn } from "@/lib/cn";
import { forwardRef, memo, type ComponentPropsWithoutRef } from "react";

export type MonogramVariant = "red" | "black" | "white";
export type MonogramSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface MonogramProps extends Omit<ComponentPropsWithoutRef<"img">, "src" | "alt"> {
  variant?: MonogramVariant;
  size?: MonogramSize;
  /** Alt text for accessibility (defaults to "SDSU Monogram") */
  alt?: string;
}

const SIZE_CLASSES: Record<MonogramSize, string> = {
  xs: "h-[var(--component-monogram-size-xs)]",
  sm: "h-[var(--component-monogram-size-sm)]",
  md: "h-[var(--component-monogram-size-md)]",
  lg: "h-[var(--component-monogram-size-lg)]",
  xl: "h-[var(--component-monogram-size-xl)]",
};

const BASE_CLASSES = [
  "w-auto",
  "object-contain",
].join(" ");

const MONOGRAM_ASSETS: Record<MonogramVariant, string> = {
  red: new URL("@/shared/assets/logos/sdsu_monogram_rgb_solid_red.png", import.meta.url).href,
  black: new URL("@/shared/assets/logos/sdsu_monogram_rrgb_solid_black.png", import.meta.url).href,
  white: new URL("@/shared/assets/logos/sdsu_monogram_rgb_solid_white.png", import.meta.url).href,
};

export const Monogram = memo(
  forwardRef<HTMLImageElement, MonogramProps>(function Monogram(
    {
      variant = "red",
      size = "md",
      alt = "SDSU Monogram",
      className,
      ...props
    },
    ref
  ) {
    const monogramPath = MONOGRAM_ASSETS[variant];

    return (
      <img
        ref={ref}
        src={monogramPath}
        alt={alt}
        className={cn(BASE_CLASSES, SIZE_CLASSES[size], className)}
        data-monogram-variant={variant}
        data-monogram-size={size}
        {...props}
      />
    );
  })
);

Monogram.displayName = "Monogram";
