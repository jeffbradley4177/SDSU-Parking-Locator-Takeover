import { cn } from "@/lib/cn";
import { type ComponentPropsWithoutRef } from "react";

export interface LinkProps extends ComponentPropsWithoutRef<"a"> {
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
