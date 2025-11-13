/**
 * Heading Components (H1, H2, H3)
 *
 * Semantic heading components with consistent styling from design tokens
 */

import { cn } from "@/lib/cn";
import { type ComponentPropsWithoutRef } from "react";

type HeadingProps = ComponentPropsWithoutRef<"h1">;

/**
 * H1 Component
 * Primary page heading
 *
 * @example
 * ```tsx
 * <H1>Page Title</H1>
 * <H1 className="mb-4">Custom Spacing</H1>
 * ```
 */
export const H1 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "text-[length:var(--component-typography-heading-h1-size)]",
        "font-[var(--component-typography-heading-weight-bold)]",
        "leading-[var(--primitive-font-line-height-compact)]",
        "text-[var(--component-typography-color-primary)]",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

/**
 * H2 Component
 * Section heading
 *
 * @example
 * ```tsx
 * <H2>Section Title</H2>
 * ```
 */
export const H2 = ({ children, className, ...props }: ComponentPropsWithoutRef<"h2">) => {
  return (
    <h2
      className={cn(
        "text-[length:var(--component-typography-heading-h2-size)]",
        "font-[var(--component-typography-heading-weight-semibold)]",
        "leading-[var(--primitive-font-line-height-compact)]",
        "text-[var(--component-typography-color-primary)]",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

/**
 * H3 Component
 * Subsection heading
 *
 * @example
 * ```tsx
 * <H3>Subsection Title</H3>
 * ```
 */
export const H3 = ({ children, className, ...props }: ComponentPropsWithoutRef<"h3">) => {
  return (
    <h3
      className={cn(
        "text-[length:var(--component-typography-heading-h3-size)]",
        "font-[var(--component-typography-heading-weight-semibold)]",
        "leading-[var(--primitive-font-line-height-compact)]",
        "text-[var(--component-typography-color-primary)]",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
};
