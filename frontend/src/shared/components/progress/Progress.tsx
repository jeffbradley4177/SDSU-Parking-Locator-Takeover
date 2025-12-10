import {
  type ComponentPropsWithoutRef,
  forwardRef,
  memo,
} from 'react';
import { cn } from '@/lib/cn';

const TRACK_BASE_CLASSES =
  'w-full overflow-hidden rounded-[length:var(--component-progress-radius-default)] bg-[color:var(--component-progress-track-bg)]';

const FILL_BASE_CLASSES =
  'h-full transition-all ease-in-out rounded-[length:var(--component-progress-radius-default)] bg-[color:var(--component-progress-fill-bg)]';

const VALUE_TEXT_CLASSES =
  'mt-[length:var(--component-progress-gap)] text-[length:var(--component-progress-font-size)] text-[color:var(--component-progress-text-default)] text-right font-[number:var(--component-progress-percentage-font-weight)]';

const HEIGHT_CLASS = 'h-[length:var(--component-progress-height)]';

export interface ProgressProps extends ComponentPropsWithoutRef<'div'> {
  value: number;
  max?: number;
  showValue?: boolean;
  label?: string;
}

export const Progress = memo(
  forwardRef<HTMLDivElement, ProgressProps>(function Progress(
    {
      value,
      max = 100,
      showValue = false,
      label,
      className,
      ...rest
    },
    ref
  ) {
    const clampedValue = Math.min(Math.max(0, value), max);
    const percentage = (clampedValue / max) * 100;
    const trackClasses = cn(TRACK_BASE_CLASSES, HEIGHT_CLASS, className);

    return (
      <div
        ref={ref}
        className={trackClasses}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
        {...rest}
      >
        <div
          className={FILL_BASE_CLASSES}
          style={{ width: `${percentage}%` }}
        />
        {showValue && (
          <span className={VALUE_TEXT_CLASSES} aria-hidden="true">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    );
  })
);

Progress.displayName = 'Progress';
