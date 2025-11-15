import { cn } from "@/lib/cn";
import { type ComponentPropsWithoutRef } from "react";

export interface TextProps extends ComponentPropsWithoutRef<"p"> {
  variant?: "body" | "body-sm" | "caption";
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
        "leading-[var(--component-typography-line-height-normal)]",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
