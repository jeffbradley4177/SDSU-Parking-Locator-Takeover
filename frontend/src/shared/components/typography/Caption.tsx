/**
 * Caption Component
 *
 * Small text for captions, labels, and helper text
 */

import { cn } from "@/lib/cn";
import { type ComponentPropsWithoutRef } from "react";

export interface CaptionProps extends ComponentPropsWithoutRef<"small"> {
  /**
   * Caption color variant
   * - secondary: Muted text (default)
   * - primary: Primary text color
   * - error: Error text color
   */
  color?: "secondary" | "primary" | "error";
}

const colorStyles = {
  secondary: "text-[var(--component-typography-color-secondary)]",
  primary: "text-[var(--component-typography-color-primary)]",
  error: "text-[var(--component-typography-color-error)]",
};

/**
 * Caption Component
 *
 * @example
 * ```tsx
 * <Caption>Helper text</Caption>
 * <Caption color="error">Error message</Caption>
 * <Caption color="primary">Important note</Caption>
 * ```
 */
export const Caption = ({
  children,
  className,
  color = "secondary",
  ...props
}: CaptionProps) => {
  return (
    <small
      className={cn(
        "text-[length:var(--component-typography-text-caption-size)]",
        "leading-[var(--primitive-font-line-height-normal)]",
        colorStyles[color],
        className,
      )}
      {...props}
    >
      {children}
    </small>
  );
};
