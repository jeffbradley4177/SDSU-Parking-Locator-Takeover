import { cn } from "@/lib/cn";
import { type ComponentPropsWithoutRef } from "react";

export interface CaptionProps extends ComponentPropsWithoutRef<"small"> {
  color?: "secondary" | "primary" | "error";
}

const colorStyles = {
  secondary: "text-[var(--component-typography-color-secondary)]",
  primary: "text-[var(--component-typography-color-primary)]",
  error: "text-[var(--component-typography-color-error)]",
};

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
