import { cn } from "@/lib/cn";
import { forwardRef, memo, type ComponentPropsWithoutRef } from "react";

const H1_CLASSES = [
  "text-[length:var(--component-typography-heading-h1-size)]",
  "font-[var(--component-typography-heading-weight-bold)]",
  "leading-[var(--primitive-font-line-height-compact)]",
  "text-[var(--component-typography-color-primary)]",
].join(" ");

const H2_CLASSES = [
  "text-[length:var(--component-typography-heading-h2-size)]",
  "font-[var(--component-typography-heading-weight-semibold)]",
  "leading-[var(--primitive-font-line-height-compact)]",
  "text-[var(--component-typography-color-primary)]",
].join(" ");

const H3_CLASSES = [
  "text-[length:var(--component-typography-heading-h3-size)]",
  "font-[var(--component-typography-heading-weight-semibold)]",
  "leading-[var(--primitive-font-line-height-compact)]",
  "text-[var(--component-typography-color-primary)]",
].join(" ");

export interface HeadingProps extends ComponentPropsWithoutRef<"h1"> {}

export const H1 = memo(
  forwardRef<HTMLHeadingElement, HeadingProps>(function H1(
    { children, className, ...props },
    ref
  ) {
    return (
      <h1
        ref={ref}
        className={cn(H1_CLASSES, className)}
        {...props}
      >
        {children}
      </h1>
    );
  })
);

H1.displayName = "H1";

export const H2 = memo(
  forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<"h2">>(function H2(
    { children, className, ...props },
    ref
  ) {
    return (
      <h2
        ref={ref}
        className={cn(H2_CLASSES, className)}
        {...props}
      >
        {children}
      </h2>
    );
  })
);

H2.displayName = "H2";

export const H3 = memo(
  forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<"h3">>(function H3(
    { children, className, ...props },
    ref
  ) {
    return (
      <h3
        ref={ref}
        className={cn(H3_CLASSES, className)}
        {...props}
      >
        {children}
      </h3>
    );
  })
);

H3.displayName = "H3";
