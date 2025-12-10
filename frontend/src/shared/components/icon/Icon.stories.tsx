import type { Meta, StoryObj } from "@storybook/react";
import {
  BiCar,
  BiCheckCircle,
  BiCog,
  BiError,
  BiMap,
  BiMapPin,
  BiPlus,
  BiPulse,
  BiSearch,
  BiStats,
  BiTrash,
  BiUser,
  BiXCircle,
} from "react-icons/bi";
import { Icon } from "./Icon";
import type { IconSize, IconColor } from "./Icon";

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
          "A flexible Icon component using react-icons. Import icons directly from react-icons and pass them to the `icon` prop.\n\n**Usage:**\n```tsx\nimport { BiCar } from 'react-icons/bi';\n<Icon icon={BiCar} size=\"md\" color=\"primary\" />\n```",
      },
    },
  },
  args: {
    icon: BiCar,
    size: "md",
    color: "inherit",
  },
  argTypes: {
    icon: {
      control: false,
      description: "Icon component from react-icons",
      table: {
        type: { summary: "IconType" },
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
        defaultValue: { summary: "inherit" },
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
    <div className="flex items-end gap-4">
      {SIZE_OPTIONS.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Icon icon={BiCar} size={size} />
          <span className="text-xs text-gray-500">{size}</span>
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
    <div className="flex flex-wrap items-center gap-6">
      {COLOR_OPTIONS.map((color) => (
        <div key={color} className="flex flex-col items-center gap-2">
          <Icon icon={BiMapPin} size="lg" color={color} />
          <span className="text-xs text-gray-500">{color}</span>
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
 * Status icons with semantic colors
 */
export const StatusIcons: Story = {
  render: () => (
    <div className="flex gap-6">
      <div className="flex flex-col items-center gap-2">
        <Icon icon={BiCheckCircle} size="xl" color="success" />
        <span className="text-xs text-gray-500">Available</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={BiError} size="xl" color="warning" />
        <span className="text-xs text-gray-500">Limited</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={BiXCircle} size="xl" color="error" />
        <span className="text-xs text-gray-500">Full</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={BiPulse} size="xl" color="primary" />
        <span className="text-xs text-gray-500">Real-time</span>
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
 * Icons in buttons
 */
export const InButtons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          <Icon icon={BiPlus} size="sm" />
          Add Parking
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2"
        >
          <Icon icon={BiSearch} size="sm" />
          Search
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 p-2"
          aria-label="Settings"
        >
          <Icon icon={BiCog} size="sm" />
        </button>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white"
        >
          <Icon icon={BiTrash} size="sm" />
          Delete
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2"
        >
          <Icon icon={BiMap} size="sm" />
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
    <div className="flex flex-col gap-6">
      {/* Parking status card */}
      <div className="rounded-lg border border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <Icon icon={BiCar} size="xl" color="primary" />
          <div>
            <h4 className="font-semibold">Parking Lot A</h4>
            <div className="mt-1 flex items-center gap-2">
              <Icon icon={BiCheckCircle} size="sm" color="success" />
              <span className="text-sm text-gray-500">50 spots available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <div className="rounded-lg border border-gray-200 p-4">
        <nav className="flex flex-col gap-1">
          <a
            href="#"
            className="flex items-center gap-3 rounded px-3 py-2 hover:bg-gray-100"
          >
            <Icon icon={BiMap} size="md" color="primary" />
            <span>Map View</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded px-3 py-2 hover:bg-gray-100"
          >
            <Icon icon={BiStats} size="md" color="primary" />
            <span>Analytics</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded px-3 py-2 hover:bg-gray-100"
          >
            <Icon icon={BiUser} size="md" color="primary" />
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
