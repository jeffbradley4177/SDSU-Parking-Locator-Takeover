/**
 * Text Component
 *
 * Body text component with consistent styling from design tokens
 */

import { cn } from "@/lib/cn";
import { type ComponentPropsWithoutRef } from "react";

export interface TextProps extends ComponentPropsWithoutRef<"p"> {
  /**
   * Text variant
   * - body: Default body text
   * - body-sm: Small body text
   * - caption: Smaller caption text
   */
  variant?: "body" | "body-sm" | "caption";

  /**
   * Text color variant
   * - primary: Default text color
   * - secondary: Muted text color
   * - inverse: Light text (for dark backgrounds)
   * - link: Link color
   * - error: Error text color
   */
  color?: "primary" | "secondary" | "inverse" | "link" | "error";
}

const variantStyles = {
  body: "text-[length:var(--component-typography-text-body-size)]",
  "body-sm": "text-[length:var(--component-typography-text-body-sm-size)]",
  caption: "text-[length:var(--component-typography-text-caption-size)]",
};

const colorStyles = {
  primary: "text-[var(--component-typography-color-primary)]",
  secondary: "text-[var(--component-typography-color-secondary)]",
  inverse: "text-[var(--component-typography-color-inverse)]",
  link: "text-[var(--component-typography-color-link)]",
  error: "text-[var(--component-typography-color-error)]",
};

/**
 * Text Component
 *
 * @example
 * ```tsx
 * <Text>Default body text</Text>
 * <Text variant="caption" color="secondary">Small muted text</Text>
 * <Text variant="body-sm">Small body text</Text>
 * ```
 */
export const Text = ({
  children,
  className,
  variant = "body",
  color = "primary",
  ...props
}: TextProps) => {
  return (
    <p
      className={cn(
        variantStyles[variant],
        colorStyles[color],
        "leading-[var(--primitive-font-line-height-normal)]",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
