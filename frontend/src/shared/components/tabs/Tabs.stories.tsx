import type { Meta, StoryObj } from "@storybook/react";
import { Tab } from "./Tabs";

// Sample icons for stories
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const MapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const meta = {
  title: "UI/Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Tab component for navigation and selection interfaces. Tabs are typically used in groups to switch between views or filter content.",
      },
    },
  },
  args: {
    isActive: false,
    children: "Tab Label",
  },
  argTypes: {
    isActive: {
      control: "boolean",
      description: "Currently selected/active state",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    leadingIcon: {
      control: false,
      description: "Icon displayed before label",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    trailingIcon: {
      control: false,
      description: "Icon displayed after label",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    children: {
      control: "text",
      description: "Tab label content",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof Tab>;

/**
 * Interactive playground for testing tab configurations
 * 
 * Use Cases:
 * - Experimenting with tab variations
 * - Testing active/inactive states
 * - Prototyping navigation designs
 */
export const Playground: Story = {
  args: {
    children: "Tab Label",
  },
};

/**
 * Active tab state
 * 
 * Use Cases:
 * - Current navigation section
 * - Selected filter option
 * - Active view indicator
 * - Current page in multi-step flow
 */
export const Active: Story = {
  args: {
    isActive: true,
    children: "Active Tab",
  },
};

/**
 * Inactive/default tab state
 * 
 * Use Cases:
 * - Unselected navigation options
 * - Available filters
 * - Other views/sections
 * - Clickable navigation items
 */
export const Inactive: Story = {
  args: {
    isActive: false,
    children: "Inactive Tab",
  },
};

/**
 * Tab with leading icon
 * 
 * Use Cases:
 * - Navigation with visual indicators
 * - Categorized sections with icons
 * - Dashboard navigation
 * - Settings panels
 */
export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: <HomeIcon />,
    children: "Home",
  },
};

/**
 * Tab with trailing icon
 * 
 * Use Cases:
 * - Dropdown indicators
 * - Status badges
 * - Notification counts
 * - Expandable sections
 */
export const WithTrailingIcon: Story = {
  args: {
    children: "More Options",
    trailingIcon: <ChevronDownIcon />,
  },
};

/**
 * Icon-only tab (no text)
 * 
 * Use Cases:
 * - Compact toolbars
 * - Mobile navigation
 * - Icon-based view switchers
 * - Map layer controls
 */
export const IconOnly: Story = {
  args: {
    leadingIcon: <MapIcon />,
    children: undefined,
    "aria-label": "Map View",
  },
};

/**
 * Disabled tab state
 * 
 * Use Cases:
 * - Locked features
 * - Unavailable sections
 * - Permission-restricted views
 * - Coming soon features
 */
export const Disabled: Story = {
  args: {
    children: "Disabled Tab",
    disabled: true,
  },
};

/**
 * Horizontal tab group
 * 
 * Use Cases:
 * - Page navigation
 * - Content filters
 * - View switchers
 * - Dashboard sections
 */
export const TabGroup: Story = {
  render: () => (
    <div className="flex gap-2 p-4 bg-[var(--semantic-surface-base)] rounded-lg">
      <Tab isActive={true}>Overview</Tab>
      <Tab>Parking Lots</Tab>
      <Tab>Analytics</Tab>
      <Tab>Settings</Tab>
    </div>
  ),
};

/**
 * Tab group with icons
 * 
 * Use Cases:
 * - Main navigation menu
 * - Dashboard sections
 * - Feature categories
 * - Settings panels
 */
export const TabGroupWithIcons: Story = {
  render: () => (
    <div className="flex gap-2 p-4 bg-[var(--semantic-surface-base)] rounded-lg">
      <Tab isActive={true} leadingIcon={<HomeIcon />}>Home</Tab>
      <Tab leadingIcon={<MapIcon />}>Map</Tab>
      <Tab leadingIcon={<ChartIcon />}>Analytics</Tab>
      <Tab leadingIcon={<SettingsIcon />}>Settings</Tab>
    </div>
  ),
};

/**
 * Vertical tab layout
 * 
 * Use Cases:
 * - Sidebar navigation
 * - Settings panels
 * - Wizard steps
 * - Filter groups
 */
export const VerticalTabs: Story = {
  render: () => (
    <div className="flex flex-col gap-1 p-4 bg-[var(--semantic-surface-base)] rounded-lg w-48">
      <Tab isActive={true} leadingIcon={<HomeIcon />}>Dashboard</Tab>
      <Tab leadingIcon={<MapIcon />}>Parking Map</Tab>
      <Tab leadingIcon={<ChartIcon />}>Reports</Tab>
      <Tab leadingIcon={<SettingsIcon />}>Settings</Tab>
    </div>
  ),
};

/**
 * Compact icon-only tabs for map controls
 * 
 * Use Cases:
 * - Map layer switchers
 * - View mode toggles
 * - Compact toolbars
 * - Mobile controls
 */
export const MapControls: Story = {
  render: () => (
    <div className="flex gap-1 p-2 bg-white rounded-lg shadow-sm border border-[var(--semantic-border-default)]">
      <Tab isActive={true} leadingIcon={<MapIcon />} aria-label="Street View" />
      <Tab leadingIcon={<ChartIcon />} aria-label="Satellite View" />
      <Tab leadingIcon={<HomeIcon />} aria-label="Terrain View" />
    </div>
  ),
};

/**
 * Real-world navigation example
 * 
 * Use Cases:
 * - Website header navigation
 * - Application main menu
 * - Section switchers
 * - Content filters
 */
export const NavigationExample: Story = {
  render: () => (
    <nav className="border-b border-[var(--semantic-border-default)] bg-white">
      <div className="flex gap-6 px-6">
        <Tab isActive={true}>Overview</Tab>
        <Tab>Available Lots</Tab>
        <Tab leadingIcon={<MapIcon />}>Campus Map</Tab>
        <Tab>My Reports</Tab>
        <Tab leadingIcon={<SettingsIcon />}>Settings</Tab>
      </div>
    </nav>
  ),
};

/**
 * Tabs with Container component
 * 
 * Use Cases:
 * - Responsive layouts
 * - Contained navigation
 * - Card headers
 * - Section switchers
 */
export const WithContainer: Story = {
  render: () => (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-sm border border-[var(--semantic-border-default)] p-4">
        <h2 className="text-lg font-semibold mb-4">Parking Statistics</h2>
        <div className="flex gap-4 border-b border-[var(--semantic-border-subtle)] pb-2 mb-4">
          <Tab isActive={true}>Today</Tab>
          <Tab>This Week</Tab>
          <Tab>This Month</Tab>
          <Tab>All Time</Tab>
        </div>
        <div className="text-[var(--semantic-text-secondary)] text-sm">
          Content area for selected tab view
        </div>
      </div>
    </div>
  ),
};

/**
 * Mixed states demonstration
 * 
 * Use Cases:
 * - Design system documentation
 * - State comparison
 * - Accessibility testing
 * - Visual QA
 */
export const AllStates: Story = {
  render: () => (
    <div className="space-y-8 p-4">
      <div>
        <h3 className="text-sm font-medium mb-2 text-[var(--semantic-text-secondary)]">Active</h3>
        <Tab isActive={true}>Active Tab</Tab>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2 text-[var(--semantic-text-secondary)]">Inactive</h3>
        <Tab>Inactive Tab</Tab>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2 text-[var(--semantic-text-secondary)]">Disabled</h3>
        <Tab disabled>Disabled Tab</Tab>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2 text-[var(--semantic-text-secondary)]">With Leading Icon</h3>
        <Tab leadingIcon={<HomeIcon />}>With Icon</Tab>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2 text-[var(--semantic-text-secondary)]">Icon Only</h3>
        <Tab leadingIcon={<MapIcon />} aria-label="Map" />
      </div>
    </div>
  ),
};
