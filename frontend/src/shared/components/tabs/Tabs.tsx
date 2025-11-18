import { cn } from "@/lib/cn";
import {
  forwardRef,
  memo,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

export interface TabProps extends ComponentPropsWithoutRef<"button"> {
  isActive?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  shadow?: boolean;
}

// Base tab styles using component tokens
const BASE_CLASSES = [
  // Layout
  "inline-flex items-center justify-center",
  "gap-[length:var(--component-tab-gap)]",

  // Shape & Border
  "rounded-[length:var(--component-tab-radius)]",
  "border-b-[length:var(--component-tab-indicator-height)]",

  // Typography
  "text-[length:var(--component-tab-font-size)]",
  "font-[var(--component-tab-font-weight)]",
  "leading-none",
  "whitespace-nowrap",

  // Transitions
  "transition-colors duration-[var(--component-tab-transition-duration)]",

  // Focus States
  "focus-visible:outline",
  "focus-visible:outline-[length:var(--component-tab-focus-outline-width)]",
  "focus-visible:outline-[var(--semantic-border-focus)]",
  "focus-visible:outline-[length:var(--component-tab-focus-outline-offset)]",

  // Disabled States
  "disabled:pointer-events-none",
  "disabled:opacity-[var(--component-tab-disabled-opacity)]",
].join(" ");

// Icon wrapper styles
const ICON_WRAPPER_CLASSES = [
  // Layout
  "inline-flex shrink-0 items-center justify-center",

  // Sizing using component tokens
  "h-[var(--component-tab-icon-size)]",
  "w-[var(--component-tab-icon-size)]",

  // SVG child sizing
  "[&>svg]:h-full [&>svg]:w-full",
].join(" ");

// Active state styles
const ACTIVE_STYLES = [
  "bg-[var(--component-tab-bg-active)]",
  "text-[var(--component-tab-text-active)]",
  "border-b-[var(--component-tab-border-active)]",
].join(" ");

// Inactive state styles
const INACTIVE_STYLES = [
  "bg-[var(--component-tab-bg-inactive)]",
  "text-[var(--component-tab-text-inactive)]",
  "border-b-[var(--component-tab-border-inactive)]",
  "hover:bg-[var(--component-tab-bg-hover)]",
  "hover:text-[var(--component-tab-text-hover)]",
].join(" ");

// Memoized icon wrapper component
const IconWrapper = memo(({ icon }: { icon: ReactNode }) => (
  <span className={ICON_WRAPPER_CLASSES} aria-hidden="true">
    {icon}
  </span>
));
IconWrapper.displayName = "IconWrapper";


export const Tab = memo(
  forwardRef<HTMLButtonElement, TabProps>(function Tab(
    {
      isActive = false,
      leadingIcon,
      trailingIcon,
      shadow = false,
      className,
      children,
      type = "button",
      ...rest
    },
    ref,
  ) {
    // Compute tab classes
    const tabClasses = cn(
      BASE_CLASSES,
      isActive ? ACTIVE_STYLES : INACTIVE_STYLES,
      className,
    );

    return (
      <button
        ref={ref}
        type={type}
        role="tab"
        aria-selected={isActive}
        tabIndex={isActive ? 0 : -1}
        data-active={isActive || undefined}
        className={tabClasses}
        style={{
          minHeight: "var(--component-tab-height)",
          paddingInline: "var(--component-tab-padding-inline)",
          paddingBlock: "var(--component-tab-padding-block)",
        }}
        {...rest}
      >
        {/* Leading icon */}
        {leadingIcon && <IconWrapper icon={leadingIcon} />}

        {/* Tab content */}
        {children && (
          <span className="flex items-center justify-center h-full">
            {children}
          </span>
        )}

        {/* Trailing icon */}
        {trailingIcon && <IconWrapper icon={trailingIcon} />}
      </button>
    );
  }),
);

Tab.displayName = "Tab";
