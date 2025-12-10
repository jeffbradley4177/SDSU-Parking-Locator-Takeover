import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Drawer, type DrawerState } from "./DrawerContainer";

const meta = {
  title: "UI/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A bottom drawer component with three states: collapsed (handle only), partial (one child visible), and full (multiple children). Supports drag gestures, click to toggle, and backdrop interaction. Uses design system tokens from `globals.css`.",
      },
    },
  },
  argTypes: {
    state: {
      control: "select",
      options: ["collapsed", "partial", "full"],
      description: "Current state of the drawer",
      table: {
        type: { summary: "DrawerState" },
        defaultValue: { summary: "collapsed" },
      },
    },
    showScrim: {
      control: "boolean",
      description: "Whether to show backdrop when drawer is open",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    closeOnScrimClick: {
      control: "boolean",
      description: "Whether clicking backdrop closes the drawer",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    controlled: {
      control: "boolean",
      description: "Whether the drawer state is controlled externally",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof Drawer>;

// Demo content component
// Note: Pass multiple children directly to demonstrate gap between them
const DemoContent = () => (
  <>
    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
      <h3 className="font-semibold text-lg mb-2">Child 1</h3>
      <p className="text-sm text-gray-600">
        This is the first child element. It's visible in both partial and full states.
      </p>
    </div>
    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
      <h3 className="font-semibold text-lg mb-2">Child 2</h3>
      <p className="text-sm text-gray-600">
        This is the second child element. It's only visible in the full state.
      </p>
    </div>
    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
      <h3 className="font-semibold text-lg mb-2">Child 3</h3>
      <p className="text-sm text-gray-600">
        This is the third child element. It's only visible in the full state.
      </p>
    </div>
    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
      <h3 className="font-semibold text-lg mb-2">Child 4</h3>
      <p className="text-sm text-gray-600">
        This is the fourth child element. It's only visible in the full state.
      </p>
    </div>
  </>
);

/**
 * Default drawer in collapsed state
 * 
 * Use Cases:
 * - Initial state when page loads
 * - Minimized drawer showing only handle
 * - Space-efficient default state
 */
export const Default: Story = {
  render: () => (
    <div className="h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Page Content</h1>
        <p className="text-gray-600 mb-4">
          Click or drag the drawer handle at the bottom to open it.
        </p>
        <div className="bg-white p-6 rounded-lg shadow">
          <p>Main content area</p>
        </div>
      </div>
      <Drawer>
        <DemoContent />
      </Drawer>
    </div>
  ),
};

/**
 * Drawer in partial state
 * 
 * Use Cases:
 * - Show preview of content
 * - Quick glance information
 * - Single item display
 * - Minimized but still visible
 */
export const PartialState: Story = {
  render: () => (
    <div className="h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Page Content</h1>
        <p className="text-gray-600">The drawer is in partial state (40vh height).</p>
      </div>
      <Drawer state="partial" controlled>
        <DemoContent />
      </Drawer>
    </div>
  ),
};

/**
 * Drawer in full state
 * 
 * Use Cases:
 * - Display multiple items
 * - Full content view
 * - Maximum information display
 * - Scrollable content
 */
export const FullState: Story = {
  render: () => (
    <div className="h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Page Content</h1>
        <p className="text-gray-600">The drawer is in full state (85vh height).</p>
      </div>
      <Drawer state="full" controlled>
        <DemoContent />
      </Drawer>
    </div>
  ),
};

/**
 * Drawer without scrim/backdrop
 * 
 * Use Cases:
 * - Less intrusive overlay
 * - Allow interaction with background
 * - Cleaner visual appearance
 */
export const NoScrim: Story = {
  render: () => (
    <div className="h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Page Content</h1>
        <p className="text-gray-600">Drawer without backdrop overlay.</p>
      </div>
      <Drawer state="partial" controlled showScrim={false}>
        <DemoContent />
      </Drawer>
    </div>
  ),
};

/**
 * Controlled drawer with external state management
 * 
 * Use Cases:
 * - State managed by parent component
 * - Integration with app state
 * - Custom state transitions
 * - Programmatic control
 */
export const ControlledDrawer: Story = {
  render: () => {
    const [state, setState] = useState<DrawerState>("collapsed");

    return (
      <div className="h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Controlled Drawer Example</h1>
          <div className="space-y-4">
            <p className="text-gray-600">
              Current state: <strong>{state}</strong>
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setState("collapsed")}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Collapse
              </button>
              <button
                onClick={() => setState("partial")}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Partial
              </button>
              <button
                onClick={() => setState("full")}
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
              >
                Full
              </button>
            </div>
          </div>
        </div>
        <Drawer state={state} onStateChange={setState} controlled>
          <DemoContent />
        </Drawer>
      </div>
    );
  },
};

/**
 * Interactive drawer (default behavior)
 * 
 * Use Cases:
 * - User can drag to resize
 * - Click handle to cycle states
 * - Click backdrop to close
 * - Natural mobile-like interaction
 */
export const Interactive: Story = {
  render: () => (
    <div className="h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Interactive Drawer</h1>
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <p className="text-gray-600">
            <strong>Try these interactions:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
            <li>Click the handle bar to cycle through states</li>
            <li>Drag the handle up or down to change states</li>
            <li>Click the backdrop to collapse the drawer</li>
            <li>Use keyboard (Tab to focus, Enter/Space to toggle)</li>
          </ul>
        </div>
      </div>
      <Drawer>
        <DemoContent />
      </Drawer>
    </div>
  ),
};

/**
 * Real-world example: Parking lot details drawer
 * 
 * Use Cases:
 * - Map applications
 * - Location details
 * - Parking information
 * - Bottom sheet UI pattern
 */
export const ParkingLotExample: Story = {
  render: () => (
    <div className="h-screen bg-gray-100 relative">
      {/* Mock map background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <svg
            className="w-24 h-24 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
          <p className="text-lg font-semibold">Campus Map</p>
        </div>
      </div>

      <Drawer>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold mb-2">Parking Lot A</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 font-medium">
                42 spots available
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Total Spaces</span>
              <span className="font-semibold">120</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Available</span>
              <span className="font-semibold text-green-600">42</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Occupied</span>
              <span className="font-semibold text-red-600">78</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Permit Type</span>
              <span className="font-semibold">General</span>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-gray-600">
              Near Student Union, accessible from Campus Drive
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-semibold mb-2">Peak Hours</h3>
            <p className="text-sm text-gray-600">
              Typically full between 9 AM - 2 PM on weekdays
            </p>
          </div>

          <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
            Get Directions
          </button>
        </div>
      </Drawer>
    </div>
  ),
};

/**
 * Design system tokens documentation
 */
export const DesignTokens: Story = {
  render: () => (
    <div className="h-screen bg-gray-100 p-8 overflow-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Drawer Design Tokens</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-3 rounded">
              <code className="text-xs">--component-drawer-bg</code>
              <p className="text-sm text-gray-600 mt-1">Background color</p>
            </div>
            <div className="border p-3 rounded">
              <code className="text-xs">--component-drawer-border</code>
              <p className="text-sm text-gray-600 mt-1">Border color</p>
            </div>
            <div className="border p-3 rounded">
              <code className="text-xs">--component-drawer-handle</code>
              <p className="text-sm text-gray-600 mt-1">Handle bar color</p>
            </div>
            <div className="border p-3 rounded">
              <code className="text-xs">--component-drawer-scrim</code>
              <p className="text-sm text-gray-600 mt-1">Backdrop overlay</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Heights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border p-3 rounded">
              <code className="text-xs">--component-drawer-height-collapsed</code>
              <p className="text-sm text-gray-600 mt-1">64px</p>
            </div>
            <div className="border p-3 rounded">
              <code className="text-xs">--component-drawer-height-partial</code>
              <p className="text-sm text-gray-600 mt-1">40vh</p>
            </div>
            <div className="border p-3 rounded">
              <code className="text-xs">--component-drawer-height-full</code>
              <p className="text-sm text-gray-600 mt-1">85vh</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Other Tokens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border p-3 rounded">
              <code className="text-xs">--component-drawer-radius</code>
              <p className="text-sm text-gray-600 mt-1">Top border radius</p>
            </div>
            <div className="border p-3 rounded">
              <code className="text-xs">--component-drawer-shadow</code>
              <p className="text-sm text-gray-600 mt-1">Box shadow</p>
            </div>
            <div className="border p-3 rounded">
              <code className="text-xs">--component-drawer-z-index</code>
              <p className="text-sm text-gray-600 mt-1">Layer stacking (1000)</p>
            </div>
            <div className="border p-3 rounded">
              <code className="text-xs">--component-drawer-transition-duration</code>
              <p className="text-sm text-gray-600 mt-1">Animation duration</p>
            </div>
          </div>
        </div>
      </div>
      <Drawer state="partial" controlled>
        <DemoContent />
      </Drawer>
    </div>
  ),
};
