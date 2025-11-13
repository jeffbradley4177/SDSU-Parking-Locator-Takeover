/**
 * Link Component
 *
 * Semantic link component with consistent styling
 */

import { cn } from "@/lib/cn";
import { type ComponentPropsWithoutRef } from "react";

export interface LinkProps extends ComponentPropsWithoutRef<"a"> {
  /**
   * Link variant
   * - default: Standard link with underline on hover
   * - inline: Inline link within text
   * - button: Link styled like a button (no underline)
   */
  variant?: "default" | "inline" | "button";
}

const variantStyles = {
  default: [
    "text-[var(--component-typography-color-link)]",
    "no-underline",
    "transition-colors",
    "hover:underline",
  ].join(" "),

  inline: [
    "text-[var(--component-typography-color-link)]",
    "underline",
    "transition-colors",
    "hover:text-[var(--component-typography-color-primary)]",
  ].join(" "),

  button: [
    "text-[var(--component-typography-color-link)]",
    "no-underline",
    "transition-colors",
    "hover:text-[var(--component-typography-color-primary)]",
  ].join(" "),
};

/**
 * Link Component
 *
 * @example
 * ```tsx
 * <Link href="/about">About</Link>
 * <Link href="/contact" variant="inline">Contact Us</Link>
 * <Link href="/dashboard" variant="button">Go to Dashboard</Link>
 * ```
 */
export const Link = ({
  children,
  className,
  variant = "default",
  ...props
}: LinkProps) => {
  return (
    <a
      className={cn(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
};
