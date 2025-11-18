import { cn } from "@/lib/cn";
import { forwardRef, memo, type ComponentPropsWithoutRef } from "react";
import type { IconBaseProps } from "react-icons";

import {
  BiMap,
  BiMapAlt,
  BiNavigation,
  BiCurrentLocation,
  BiMapPin,
  BiDirections,
  BiCar,
  BiSquare,
  BiSquareRounded,
  BiGrid,
  BiGridAlt,
  BiCheckCircle,
  BiCheckShield,
  BiXCircle,
  BiErrorCircle,
  BiError,
  BiErrorAlt,
  BiTime,
  BiTimeFive,
  BiPulse,
  BiCircle,
  BiUser,
  BiUserCircle,
  BiGroup,
  BiUserPlus,
  BiShield,
  BiShieldAlt2,
  BiIdCard,
  BiStats,
  BiBarChart,
  BiBarChartAlt,
  BiBarChartAlt2,
  BiPieChart,
  BiPieChartAlt,
  BiPieChartAlt2,
  BiTrendingUp,
  BiTrendingDown,
  BiLineChart,
  BiCalendar,
  BiCalendarAlt,
  BiData,
  BiPlus,
  BiPlusCircle,
  BiMinus,
  BiMinusCircle,
  BiEdit,
  BiEditAlt,
  BiSave,
  BiTrash,
  BiTrashAlt,
  BiFilter,
  BiFilterAlt,
  BiSearch,
  BiSearchAlt,
  BiSearchAlt2,
  BiRefresh,
  BiUpload,
  BiDownload,
  BiFlag,
  BiBell,
  BiCheck,
  BiCheckDouble,
  BiFile,
  BiFileBlank,
  BiMessageSquareError,
  BiMenu,
  BiMenuAltLeft,
  BiMenuAltRight,
  BiX,
  BiChevronDown,
  BiChevronUp,
  BiChevronLeft,
  BiChevronRight,
  BiArrowBack,
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiExpand,
  BiCollapse,
  BiShow,
  BiHide,
  BiCog,
  BiDotsHorizontal,
  BiDotsVertical,
  BiInfoCircle,
  BiHelpCircle,
  BiPhone,
  BiPhoneCall,
  BiEnvelope,
  BiLock,
  BiLockAlt,
  BiLockOpen,
  BiLockOpenAlt,
  BiLogIn,
  BiLogOut,
  BiLogInCircle,
  BiLogOutCircle,
  BiKey,
  BiWrench,
  BiBriefcase,
  BiBriefcaseAlt,
  BiBriefcaseAlt2,
  BiClipboard,
  BiTask,
  BiHome,
  BiHomeAlt,
  BiLike,
  BiDislike,
  BiLink,
  BiLinkExternal,
  BiHistory,
  BiLayerPlus,
  BiLayer,
} from "react-icons/bi";

// Map of icon names to components
const ICON_MAP = {
  // Navigation & Map
  map: BiMap,
  "map-alt": BiMapAlt,
  navigation: BiNavigation,
  "current-location": BiCurrentLocation,
  "map-pin": BiMapPin,
  directions: BiDirections,

  // Parking
  car: BiCar,
  square: BiSquare,
  "square-rounded": BiSquareRounded,
  grid: BiGrid,
  "grid-alt": BiGridAlt,

  // Status
  "check-circle": BiCheckCircle,
  "check-shield": BiCheckShield,
  "x-circle": BiXCircle,
  "error-circle": BiErrorCircle,
  error: BiError,
  "error-alt": BiErrorAlt,
  time: BiTime,
  "time-five": BiTimeFive,
  pulse: BiPulse,
  circle: BiCircle,

  // User
  user: BiUser,
  "user-circle": BiUserCircle,
  group: BiGroup,
  "user-plus": BiUserPlus,
  shield: BiShield,
  "shield-alt": BiShieldAlt2,
  "id-card": BiIdCard,

  // Analytics
  stats: BiStats,
  "bar-chart": BiBarChart,
  "bar-chart-alt": BiBarChartAlt,
  "bar-chart-alt-2": BiBarChartAlt2,
  "pie-chart": BiPieChart,
  "pie-chart-alt": BiPieChartAlt,
  "pie-chart-alt-2": BiPieChartAlt2,
  "trending-up": BiTrendingUp,
  "trending-down": BiTrendingDown,
  "line-chart": BiLineChart,
  calendar: BiCalendar,
  "calendar-alt": BiCalendarAlt,
  data: BiData,

  // Actions
  plus: BiPlus,
  "plus-circle": BiPlusCircle,
  minus: BiMinus,
  "minus-circle": BiMinusCircle,
  edit: BiEdit,
  "edit-alt": BiEditAlt,
  save: BiSave,
  trash: BiTrash,
  "trash-alt": BiTrashAlt,
  filter: BiFilter,
  "filter-alt": BiFilterAlt,
  search: BiSearch,
  "search-alt": BiSearchAlt,
  "search-alt-2": BiSearchAlt2,
  refresh: BiRefresh,
  upload: BiUpload,
  download: BiDownload,

  // Reports
  flag: BiFlag,
  bell: BiBell,
  check: BiCheck,
  "check-double": BiCheckDouble,
  file: BiFile,
  "file-blank": BiFileBlank,
  "message-error": BiMessageSquareError,

  // UI Navigation
  menu: BiMenu,
  "menu-left": BiMenuAltLeft,
  "menu-right": BiMenuAltRight,
  close: BiX,
  x: BiX,
  "chevron-down": BiChevronDown,
  "chevron-up": BiChevronUp,
  "chevron-left": BiChevronLeft,
  "chevron-right": BiChevronRight,
  "arrow-back": BiArrowBack,
  "arrow-left": BiLeftArrowAlt,
  "arrow-right": BiRightArrowAlt,
  expand: BiExpand,
  collapse: BiCollapse,
  show: BiShow,
  hide: BiHide,
  settings: BiCog,
  cog: BiCog,
  "dots-horizontal": BiDotsHorizontal,
  "dots-vertical": BiDotsVertical,

  // Information
  info: BiInfoCircle,
  "info-circle": BiInfoCircle,
  help: BiHelpCircle,
  phone: BiPhone,
  "phone-call": BiPhoneCall,
  email: BiEnvelope,
  envelope: BiEnvelope,

  // Authentication
  lock: BiLock,
  "lock-alt": BiLockAlt,
  "lock-open": BiLockOpen,
  "lock-open-alt": BiLockOpenAlt,
  "log-in": BiLogIn,
  "log-out": BiLogOut,
  "log-in-circle": BiLogInCircle,
  "log-out-circle": BiLogOutCircle,
  key: BiKey,

  // Staff
  wrench: BiWrench,
  briefcase: BiBriefcase,
  "briefcase-alt": BiBriefcaseAlt,
  "briefcase-alt-2": BiBriefcaseAlt2,
  clipboard: BiClipboard,
  task: BiTask,

  // Additional
  home: BiHome,
  "home-alt": BiHomeAlt,
  like: BiLike,
  dislike: BiDislike,
  link: BiLink,
  "link-external": BiLinkExternal,
  history: BiHistory,
  "layer-plus": BiLayerPlus,
  layer: BiLayer,
} as const;

export type IconName = keyof typeof ICON_MAP;
export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type IconColor =
  | "inherit"
  | "current"
  | "primary"
  | "secondary"
  | "tertiary"
  | "inverse"
  | "disabled"
  | "success"
  | "warning"
  | "error"
  | "info";

export interface IconProps
  extends Omit<ComponentPropsWithoutRef<"span">, "color"> {
  /** Icon name from the available set */
  name: IconName;
  /** Icon size */
  size?: IconSize;
  /** Icon color */
  color?: IconColor;
  /** Additional props passed to the icon component */
  iconProps?: IconBaseProps;
}

// Base icon classes
const BASE_CLASSES = [
  // Layout
  "inline-flex shrink-0",

  // SVG child sizing
  "[&>svg]:h-full [&>svg]:w-full",
].join(" ");

// Size mapping using component tokens
const SIZE_STYLES: Record<IconSize, string> = {
  xs: "h-[var(--component-icon-size-xs)] w-[var(--component-icon-size-xs)]",
  sm: "h-[var(--component-icon-size-sm)] w-[var(--component-icon-size-sm)]",
  md: "h-[var(--component-icon-size-md)] w-[var(--component-icon-size-md)]",
  lg: "h-[var(--component-icon-size-lg)] w-[var(--component-icon-size-lg)]",
  xl: "h-[var(--component-icon-size-xl)] w-[var(--component-icon-size-xl)]",
  "2xl":
    "h-[var(--component-icon-size-2xl)] w-[var(--component-icon-size-2xl)]",
};

// Color mapping using component tokens
const COLOR_STYLES: Record<IconColor, string> = {
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

/**
 * Icon component using Box Icons
 *
 * ```tsx
 * <Icon name="car" size="md" color="primary" />
 * <Icon name="map" size="lg" />
 * <Icon name="user-circle" size="xl" color="secondary" />
 * ```
 */
export const Icon = memo(
  forwardRef<HTMLSpanElement, IconProps>(function Icon(
    { name, size = "md", color = "current", className, iconProps, ...rest },
    ref,
  ) {
    const IconComponent = ICON_MAP[name];

    if (!IconComponent) {
      // Development warning
      if (import.meta.env.DEV) {
        console.error(
          `[Icon] Icon "${name}" not found in ICON_MAP. Available icons: ${Object.keys(ICON_MAP).join(", ")}`
        );
      }

      // Render error state in development, nothing in production
      return import.meta.env.DEV ? (
        <span
          ref={ref}
          className={cn(BASE_CLASSES, SIZE_STYLES[size], "text-red-500")}
          title={`Icon "${name}" not found`}
          {...rest}
        >
          ?
        </span>
      ) : null;
    }

    // Compute icon classes using component tokens
    const iconClasses = cn(
      BASE_CLASSES,
      SIZE_STYLES[size],
      COLOR_STYLES[color],
      className,
    );

    return (
      <span
        ref={ref}
        className={iconClasses}
        data-icon={name}
        data-size={size}
        data-color={color}
        aria-hidden="true"
        {...rest}
      >
        <IconComponent {...iconProps} />
      </span>
    );
  }),
);

Icon.displayName = "Icon";
