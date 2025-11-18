import { cn } from "@/lib/cn";
import { 
    forwardRef,
    memo,
    type ComponentPropsWithoutRef,
} from "react";

export type ContainerMaxWidth = "full";
export type ContainerMinWidth = "sm" | "md" | "lg" | "xl" | "full";
export type ContainerGap = "tight" | "compact" | "default" | "comfortable" | "loose" | "spacious";
export type ContainerRadius = "none" | "sm" | "md" | "lg";

export interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  maxWidth?: ContainerMaxWidth;
  minWidth?: ContainerMinWidth;
  radius?: ContainerRadius;
  withPadding?: boolean;
  centered?: boolean;
  gap?: ContainerGap;
  asStack?: boolean;
}

const MAX_WIDTH_CLASSES: Record<ContainerMaxWidth, string> = {
    full: "max-w-[var(--component-container-max-width-full)]",
}

const MIN_WIDTH_CLASSES: Record<ContainerMinWidth, string> = {
    sm: "min-w-[var(--component-container-min-width-sm)]",
    md: "min-w-[var(--component-container-min-width-md)]",
    lg: "min-w-[var(--component-container-min-width-lg)]",
    xl: "min-w-[var(--component-container-min-width-xl)]",
    full: "min-w-[var(--component-container-min-width-full)]",
}

const GAP_CLASSES: Record<ContainerGap, string> = {
    tight: "gap-[var(--component-container-gap-tight)]",
    compact: "gap-[var(--component-container-gap-compact)]",
    default: "gap-[var(--component-container-gap-default)]",
    comfortable: "gap-[var(--component-container-gap-comfortable)]",
    loose: "gap-[var(--component-container-gap-loose)]",
    spacious: "gap-[var(--component-container-gap-spacious)]",
}

const RADIUS_CLASSES: Record<ContainerRadius, string> = {
    none: "rounded-[var(--component-container-radius-none)]",
    sm: "rounded-[var(--component-container-radius-sm)]",
    md: "rounded-[var(--component-container-radius-md)]",
    lg: "rounded-[var(--component-container-radius-lg)]",
}

const BASE_CLASSES = [
    // Layout
    "w-full",
    "mx-auto",
].join(" ");

const PADDING_CLASSES = [
    "px-[length:var(--component-container-padding-mobile)]",
    'lg:px-[length:var(--component-container-padding-desktop)]',
].join(" ");


export const Container = memo(
    forwardRef<HTMLDivElement, ContainerProps>(function Container(
        {
            children,
            className,
            maxWidth = "full",
            minWidth = "lg",
            radius = "none",
            withPadding = true,
            centered = true,
            gap = "default",
            asStack = false,
            ...props
        },
        ref
    ) {
        return (
            <div
                ref={ref}
                className={cn(
                    BASE_CLASSES,
                    MAX_WIDTH_CLASSES[maxWidth],
                    MIN_WIDTH_CLASSES[minWidth],
                    RADIUS_CLASSES[radius],
                    centered && "mx-auto",
                    withPadding && PADDING_CLASSES,
                    asStack && "flex flex-col",
                    asStack && GAP_CLASSES[gap],
                    className,
                )}
                {...props}
            >
                {children} 
            </div>
        );
    })
);
