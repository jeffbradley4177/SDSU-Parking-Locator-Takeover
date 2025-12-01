import { type IconType } from 'react-icons';
import { cn } from '@/lib/cn';
import { forwardRef, memo } from 'react';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type IconColor =
  | 'inherit'
  | 'current'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'inverse'
  | 'disabled'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

// Size mapping using component tokens
export const SIZE_STYLES: Record<IconSize, string> = {
  xs: "h-[var(--component-icon-size-xs)] w-[var(--component-icon-size-xs)]",
  sm: "h-[var(--component-icon-size-sm)] w-[var(--component-icon-size-sm)]",
  md: "h-[var(--component-icon-size-md)] w-[var(--component-icon-size-md)]",
  lg: "h-[var(--component-icon-size-lg)] w-[var(--component-icon-size-lg)]",
  xl: "h-[var(--component-icon-size-xl)] w-[var(--component-icon-size-xl)]",
  "2xl": "h-[var(--component-icon-size-2xl)] w-[var(--component-icon-size-2xl)]",
};

// Color mapping using component tokens
export const COLOR_STYLES: Record<IconColor, string> = {
  inherit: "text-inherit",
  current: "text-current",
  primary: "text-[var(--component-icon-color-primary)]",
  secondary: "text-[var(--component-icon-color-secondary)]",
  tertiary: "text-[var(--component-icon-color-tertiary)]",
  inverse: "text-[var(--component-icon-color-inverse)]",
  disabled: "text-[var(--component-icon-color-disabled)]",
  success: "text-[var(--component-icon-color-success)]",
  warning: "text-[var(--component-icon-color-warning)]",
  error: "text-[var(--component-icon-color-error)]",
  info: "text-[var(--component-icon-color-info)]",
};

export interface IconProps {
  /** Icon component from react-icons */
  icon: IconType;
  /** Icon size */
  size?: IconSize;
  /** Icon color */
  color?: IconColor;
  /** Additional CSS classes */
  className?: string;
  /** Accessible label for the icon */
  'aria-label'?: string;
  /** Whether to hide the icon from assistive technology */
  'aria-hidden'?: boolean;
}

export const Icon = memo(
  forwardRef<HTMLSpanElement, IconProps>(function Icon(
    {
      icon: IconComponent,
      size = 'md',
      color = 'inherit',
      className,
      'aria-label': ariaLabel,
      'aria-hidden': ariaHidden = !ariaLabel,
      ...rest
    },
    ref
  ) {
    return (
      <span
        ref={ref}
        role={ariaLabel ? 'img' : undefined}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        className={cn(
          'inline-flex items-center justify-center',
          SIZE_STYLES[size],
          COLOR_STYLES[color],
          className
        )}
        {...rest}
      >
        <IconComponent className="h-full w-full" />
      </span>
    );
  })
);

Icon.displayName = 'Icon';
