import type { Meta, StoryObj } from "@storybook/react";
import { Icon, type IconName, type IconSize, type IconColor } from "./Icon";

// All available icon names grouped by category
const ICON_CATEGORIES = {
  "Navigation & Map": [
    "map",
    "map-alt",
    "navigation",
    "current-location",
    "map-pin",
    "directions",
  ],
  Parking: ["car", "square", "square-rounded", "grid", "grid-alt"],
  Status: [
    "check-circle",
    "check-shield",
    "x-circle",
    "error-circle",
    "error",
    "error-alt",
    "time",
    "time-five",
    "pulse",
    "circle",
  ],
  User: [
    "user",
    "user-circle",
    "group",
    "user-plus",
    "shield",
    "shield-alt",
    "id-card",
  ],
  Analytics: [
    "stats",
    "bar-chart",
    "bar-chart-alt",
    "bar-chart-alt-2",
    "pie-chart",
    "pie-chart-alt",
    "pie-chart-alt-2",
    "trending-up",
    "trending-down",
    "line-chart",
    "calendar",
    "calendar-alt",
    "data",
  ],
  Actions: [
    "plus",
    "plus-circle",
    "minus",
    "minus-circle",
    "edit",
    "edit-alt",
    "save",
    "trash",
    "trash-alt",
    "filter",
    "filter-alt",
    "search",
    "search-alt",
    "search-alt-2",
    "refresh",
    "upload",
    "download",
  ],
  Reports: [
    "flag",
    "bell",
    "check",
    "check-double",
    "file",
    "file-blank",
    "message-error",
  ],
  "UI Navigation": [
    "menu",
    "menu-left",
    "menu-right",
    "close",
    "x",
    "chevron-down",
    "chevron-up",
    "chevron-left",
    "chevron-right",
    "arrow-back",
    "arrow-left",
    "arrow-right",
    "expand",
    "collapse",
    "show",
    "hide",
    "settings",
    "cog",
    "dots-horizontal",
    "dots-vertical",
  ],
  Information: [
    "info-circle",
    "info-square",
    "info",
    "help",
    "phone",
    "phone-call",
    "email",
    "envelope",
  ],
  Authentication: [
    "lock",
    "lock-alt",
    "lock-open",
    "lock-open-alt",
    "log-in",
    "log-out",
    "log-in-circle",
    "log-out-circle",
    "key",
  ],
  Staff: [
    "wrench",
    "briefcase",
    "briefcase-alt",
    "briefcase-alt-2",
    "clipboard",
    "task",
  ],
  Additional: [
    "home",
    "home-alt",
    "like",
    "dislike",
    "link",
    "link-external",
    "history",
    "layer-plus",
    "layer",
  ],
} as const;

const SIZE_OPTIONS: IconSize[] = ["xs", "sm", "md", "lg", "xl", "2xl"];
const COLOR_OPTIONS: IconColor[] = [
  "inherit",
  "current",
  "primary",
  "secondary",
  "tertiary",
  "inverse",
  "disabled",
  "success",
  "warning",
  "error",
  "info",
];

const meta = {
  title: "UI/Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible Icon component using Box Icons. Supports multiple sizes, colors, and includes all common icons needed for the parking locator application.",
      },
    },
  },
  args: {
    name: "car",
    size: "md",
    color: "current",
  },
  argTypes: {
    name: {
      control: "select",
      options: Object.values(ICON_CATEGORIES).flat(),
      description: "Icon name from the available set",
      table: {
        type: { summary: "IconName" },
      },
    },
    size: {
      control: "select",
      options: SIZE_OPTIONS,
      description: "Size of the icon",
      table: {
        type: { summary: "IconSize" },
        defaultValue: { summary: "md" },
      },
    },
    color: {
      control: "select",
      options: COLOR_OPTIONS,
      description: "Color of the icon using design tokens",
      table: {
        type: { summary: "IconColor" },
        defaultValue: { summary: "current" },
      },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

/**
 * Default playground story for interactive testing
 */
export const Playground: Story = {};

/**
 * All available icon sizes
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-[var(--component-page-gap-tight)]">
      {SIZE_OPTIONS.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Icon name="car" size={size} />
          <span className="text-[length:var(--text-size-xs)] text-[var(--text-color-tertiary)]">
            {size}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "All available icon sizes from xs (12px) to 2xl (40px).",
      },
    },
  },
};

/**
 * All available icon colors
 */
export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-[var(--component-page-gap-comfortable)]">
      {COLOR_OPTIONS.map((color) => (
        <div key={color} className="flex flex-col items-center gap-2">
          <Icon name="map-pin" size="lg" color={color} />
          <span className="text-[length:var(--text-size-xs)] text-[var(--text-color-tertiary)]">
            {color}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "All available icon colors using design system tokens.",
      },
    },
  },
};

/**
 * Complete icon library organized by category
 */
export const AllIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--component-page-gap-wide)]">
      {Object.entries(ICON_CATEGORIES).map(([category, icons]) => (
        <div key={category}>
          <h3 className="mb-[var(--component-page-gap-comfortable)] text-[length:var(--text-size-lg)] font-[var(--text-weight-semibold)] text-[var(--text-color-primary)]">
            {category}
          </h3>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-[var(--component-page-gap-comfortable)]">
            {icons.map((iconName) => (
              <div
                key={iconName}
                className="flex flex-col items-center gap-2 rounded-[length:var(--component-button-radius)] border border-[var(--border-color-primary)] p-[var(--component-page-gap-comfortable)] transition-colors hover:bg-[var(--surface-color-secondary)]"
              >
                <Icon name={iconName as IconName} size="lg" color="primary" />
                <span className="text-center text-[length:var(--text-size-xs)] text-[var(--text-color-secondary)]">
                  {iconName}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Complete library of all available icons organized by category. Click any icon name to copy it.",
      },
    },
  },
};

/**
 * Navigation & Map icons
 */
export const NavigationIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--component-page-gap-comfortable)]">
      {ICON_CATEGORIES["Navigation & Map"].map((iconName) => (
        <div
          key={iconName}
          className="flex flex-col items-center gap-2 w-24"
        >
          <Icon name={iconName as IconName} size="xl" color="primary" />
          <span className="text-center text-[length:var(--text-size-xs)] text-[var(--text-color-secondary)]">
            {iconName}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

/**
 * Parking-related icons
 */
export const ParkingIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--component-page-gap-comfortable)]">
      {ICON_CATEGORIES.Parking.map((iconName) => (
        <div
          key={iconName}
          className="flex flex-col items-center gap-2 w-24"
        >
          <Icon name={iconName as IconName} size="xl" color="primary" />
          <span className="text-center text-[length:var(--text-size-xs)] text-[var(--text-color-secondary)]">
            {iconName}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

/**
 * Status icons showing different states
 */
export const StatusIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--component-page-gap-comfortable)]">
      <div className="flex flex-col items-center gap-2">
        <Icon name="check-circle" size="xl" color="success" />
        <span className="text-[length:var(--text-size-xs)] text-[var(--text-color-secondary)]">
          Available
        </span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="error" size="xl" color="warning" />
        <span className="text-[length:var(--text-size-xs)] text-[var(--text-color-secondary)]">
          Limited
        </span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="x-circle" size="xl" color="error" />
        <span className="text-[length:var(--text-size-xs)] text-[var(--text-color-secondary)]">
          Full
        </span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="pulse" size="xl" color="primary" />
        <span className="text-[length:var(--text-size-xs)] text-[var(--text-color-secondary)]">
          Real-time
        </span>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Status icons with semantic colors for parking availability.",
      },
    },
  },
};

/**
 * Analytics & Dashboard icons
 */
export const AnalyticsIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--component-page-gap-comfortable)]">
      {ICON_CATEGORIES.Analytics.map((iconName) => (
        <div
          key={iconName}
          className="flex flex-col items-center gap-2 w-24"
        >
          <Icon name={iconName as IconName} size="xl" color="primary" />
          <span className="text-center text-[length:var(--text-size-xs)] text-[var(--text-color-secondary)]">
            {iconName}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

/**
 * Common action icons
 */
export const ActionIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-[var(--component-page-gap-comfortable)]">
      {["plus", "edit", "trash", "search", "filter", "refresh"].map(
        (iconName) => (
          <div
            key={iconName}
            className="flex flex-col items-center gap-2 w-24"
          >
            <Icon name={iconName as IconName} size="xl" color="primary" />
            <span className="text-center text-[length:var(--text-size-xs)] text-[var(--text-color-secondary)]">
              {iconName}
            </span>
          </div>
        ),
      )}
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

/**
 * Icons in buttons demonstration
 */
export const InButtons: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--component-page-gap-comfortable)]">
      <div className="flex gap-[var(--component-page-gap-tight)]">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-[length:var(--component-button-radius)] bg-[var(--component-button-bg-primary-default)] px-4 py-2 text-[var(--component-button-text-primary-default)]"
        >
          <Icon name="plus" size="sm" />
          Add Parking
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-[length:var(--component-button-radius)] border border-[var(--border-color-primary)] px-4 py-2"
        >
          <Icon name="search" size="sm" />
          Search
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-[length:var(--component-button-radius)] border border-[var(--border-color-primary)] p-2"
          aria-label="Settings"
        >
          <Icon name="settings" size="sm" />
        </button>
      </div>
      <div className="flex gap-[var(--component-page-gap-tight)]">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-[length:var(--component-button-radius)] bg-[var(--semantic-color-error)] px-4 py-2 text-white"
        >
          <Icon name="trash" size="sm" color="inherit" />
          Delete
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-[length:var(--component-button-radius)] bg-[var(--surface-color-secondary)] px-4 py-2"
        >
          <Icon name="map" size="sm" />
          View Map
        </button>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Examples of icons used within buttons and UI elements.",
      },
    },
  },
};

/**
 * Real-world usage examples
 */
export const UsageExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--component-page-gap-wide)]">
      {/* Parking status card */}
      <div className="rounded-[length:var(--component-button-radius)] border border-[var(--border-color-primary)] p-[var(--component-page-gap-comfortable)]">
        <div className="flex items-center gap-3">
          <Icon name="car" size="xl" color="primary" />
          <div>
            <h4 className="text-[length:var(--text-size-md)] font-[var(--text-weight-semibold)]">
              Parking Lot A
            </h4>
            <div className="mt-1 flex items-center gap-2">
              <Icon name="check-circle" size="sm" color="success" />
              <span className="text-[length:var(--text-size-sm)] text-[var(--text-color-secondary)]">
                50 spots available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <div className="rounded-[length:var(--component-button-radius)] border border-[var(--border-color-primary)] p-[var(--component-page-gap-comfortable)]">
        <nav className="flex flex-col gap-2">
          <a
            href="#"
            className="flex items-center gap-3 rounded px-3 py-2 transition-colors hover:bg-[var(--surface-color-secondary)]"
          >
            <Icon name="map" size="md" color="primary" />
            <span>Map View</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded px-3 py-2 transition-colors hover:bg-[var(--surface-color-secondary)]"
          >
            <Icon name="stats" size="md" color="primary" />
            <span>Analytics</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded px-3 py-2 transition-colors hover:bg-[var(--surface-color-secondary)]"
          >
            <Icon name="user" size="md" color="primary" />
            <span>Profile</span>
          </a>
        </nav>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Real-world examples showing icons in context.",
      },
    },
  },
};
