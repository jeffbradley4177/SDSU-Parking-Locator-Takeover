import { cn } from "@/lib/cn";
import { forwardRef, memo, useMemo, type ReactNode } from "react";

type TextElement = "span" | "p" | "label" | "div" | "strong" | "em" | "small" | "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

/** Link variant styles (only applicable when as="a") */
export type LinkVariant = "default" | "inline" | "button";

export interface TextProps {
  /** HTML element to render */
  as?: TextElement;
  /** Visual heading level (applies heading styles independent of element). Auto-detected when as is h1-h6 */
  level?: HeadingLevel;
  /** Text size (for non-heading elements) */
  size?: "caption" | "small" | "body" | "subtitle";
  /** Font weight */
  weight?: "light" | "regular" | "medium" | "semibold" | "bold";
  /** Text color */
  color?: "primary" | "secondary" | "tertiary" | "inverse" | "disabled" | "link" | "error" | "warning" | "success" | "inherit";
  /** Line height */
  lineHeight?: "tight" | "normal" | "relaxed";
  /** Text alignment */
  align?: "left" | "center" | "right";
  /** Font family */
  fontFamily?: "body" | "heading" | "mono";
  /** Truncate text with ellipsis */
  truncate?: boolean;
  /** Text content */
  children?: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** HTML id attribute */
  id?: string;
  /** HTML for attribute (for label elements) */
  htmlFor?: string;
  /** Link href (for anchor elements) */
  href?: string;
  /** Link target (for anchor elements) */
  target?: "_blank" | "_self" | "_parent" | "_top";
  /** Link rel (for anchor elements) */
  rel?: string;
  /** Link variant style (only when as="a") */
  linkVariant?: LinkVariant;
}

// Heading level styles (size + default weight + line-height)
const headingLevelStyles: Record<HeadingLevel, string> = {
  h1: [
    "text-[length:var(--component-typography-heading-h1-size)]",
    "font-[number:var(--component-typography-weight-bold)]",
    "leading-[var(--component-typography-line-height-tight)]",
  ].join(" "),
  h2: [
    "text-[length:var(--component-typography-heading-h2-size)]",
    "font-[number:var(--component-typography-weight-semibold)]",
    "leading-[var(--component-typography-line-height-tight)]",
  ].join(" "),
  h3: [
    "text-[length:var(--component-typography-heading-h3-size)]",
    "font-[number:var(--component-typography-weight-semibold)]",
    "leading-[var(--component-typography-line-height-tight)]",
  ].join(" "),
  h4: [
    "text-[length:var(--component-typography-heading-h4-size)]",
    "font-[number:var(--component-typography-weight-medium)]",
    "leading-[var(--component-typography-line-height-tight)]",
  ].join(" "),
  h5: [
    "text-[length:var(--component-typography-heading-h5-size)]",
    "font-[number:var(--component-typography-weight-medium)]",
    "leading-[var(--component-typography-line-height-normal)]",
  ].join(" "),
  h6: [
    "text-[length:var(--component-typography-heading-h6-size)]",
    "font-[number:var(--component-typography-weight-medium)]",
    "leading-[var(--component-typography-line-height-normal)]",
  ].join(" "),
};

const sizeStyles: Record<NonNullable<TextProps["size"]>, string> = {
  caption: "text-[length:var(--component-typography-text-caption-size)]",
  small: "text-[length:var(--component-typography-text-small-size)]",
  body: "text-[length:var(--component-typography-text-body-size)]",
  subtitle: "text-[length:var(--component-typography-text-subtitle-size)]",
};

const weightStyles: Record<NonNullable<TextProps["weight"]>, string> = {
  light: "font-[number:var(--component-typography-weight-light)]",
  regular: "font-[number:var(--component-typography-weight-regular)]",
  medium: "font-[number:var(--component-typography-weight-medium)]",
  semibold: "font-[number:var(--component-typography-weight-semibold)]",
  bold: "font-[number:var(--component-typography-weight-bold)]",
};

const colorStyles: Record<NonNullable<TextProps["color"]>, string> = {
  primary: "text-[var(--component-typography-color-primary)]",
  secondary: "text-[var(--component-typography-color-secondary)]",
  tertiary: "text-[var(--component-typography-color-tertiary)]",
  inverse: "text-[var(--component-typography-color-inverse)]",
  disabled: "text-[var(--component-typography-color-disabled)]",
  link: "text-[var(--component-typography-color-link)]",
  error: "text-[var(--component-typography-color-error)]",
  warning: "text-[var(--component-typography-color-warning)]",
  success: "text-[var(--component-typography-color-success)]",
  inherit: "text-inherit",
};

const lineHeightStyles: Record<NonNullable<TextProps["lineHeight"]>, string> = {
  tight: "leading-[var(--component-typography-line-height-tight)]",
  normal: "leading-[var(--component-typography-line-height-normal)]",
  relaxed: "leading-[var(--component-typography-line-height-relaxed)]",
};

const alignStyles: Record<NonNullable<TextProps["align"]>, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const fontFamilyStyles: Record<NonNullable<TextProps["fontFamily"]>, string> = {
  body: "font-[family-name:var(--component-typography-font-body)]",
  heading: "font-[family-name:var(--component-typography-font-heading)]",
  mono: "font-[family-name:var(--component-typography-font-mono)]",
};

const linkVariantStyles: Record<LinkVariant, string> = {
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

const isHeadingElement = (el: TextElement): el is HeadingLevel => 
  el.length === 2 && el[0] === "h" && el[1] >= "1" && el[1] <= "6";

export const Text = memo(
  forwardRef<HTMLElement, TextProps>(function Text(
    {
      children,
      className,
      as: Component = "p",
      level,
      size = "body",
      weight,
      color = "primary",
      lineHeight = "normal",
      align,
      fontFamily,
      truncate = false,
      id,
      htmlFor,
      href,
      target,
      rel,
      linkVariant = "default",
    },
    ref
  ) {
    const isLink = Component === "a";
    const isHeading = isHeadingElement(Component);
    const headingLevel = level || (isHeading ? Component : undefined);
    const resolvedFontFamily = fontFamily ?? (isHeading ? "heading" : "body");

    // Memoize class computation
    const classes = useMemo(
      () =>
        cn(
          headingLevel
            ? headingLevelStyles[headingLevel]
            : [
                sizeStyles[size],
                weightStyles[weight ?? "regular"],
                lineHeightStyles[lineHeight],
              ],
          headingLevel && weight && weightStyles[weight],
          isLink ? linkVariantStyles[linkVariant] : colorStyles[color],
          fontFamilyStyles[resolvedFontFamily],
          align && alignStyles[align],
          truncate && "truncate",
          className
        ),
      [headingLevel, size, weight, lineHeight, isLink, linkVariant, color, resolvedFontFamily, align, truncate, className]
    );

    // Build element-specific props
    const elementProps = {
      id,
      className: classes,
      ...(Component === "label" && { htmlFor }),
      ...(isLink && { href, target, rel: target === "_blank" ? (rel || "noopener noreferrer") : rel }),
    };

    return (
      <Component ref={ref as React.Ref<never>} {...elementProps}>
        {children}
      </Component>
    );
  })
);

Text.displayName = "Text";
