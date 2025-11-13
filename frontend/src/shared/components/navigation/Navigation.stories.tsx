import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./Navigation";

/**
 * Navigation bar component with responsive hamburger menu.
 */
const meta = {
  title: "Shared/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Main navigation bar for the application. Includes SDSU branding, navigation links, and responsive hamburger menu for mobile devices. Uses design system tokens for consistent styling.",
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  name: "Desktop View",
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    docs: {
      description: {
        story: "Navigation bar in desktop view showing all links horizontally.",
      },
    },
  },
};

export const Mobile: Story = {
  name: "Mobile View",
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "Navigation bar in mobile view with hamburger menu. Click the ☰ button to toggle the menu.",
      },
    },
  },
};

export const WithContent: Story = {
  name: "In Page Context",
  render: () => (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--component-page-bg)]">
        <Navigation />
        <main className="p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Welcome to SDSU Parking Locator</h1>
            <p className="text-[var(--component-typography-color-secondary)] mb-4">
              Find available parking spots across campus in real-time. Navigate using the
              menu above to explore the map, learn about the service, or manage your profile.
            </p>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-2">Quick Stats</h2>
              <p>Current parking availability and recent updates...</p>
            </div>
          </div>
        </main>
      </div>
    </BrowserRouter>
  ),
  parameters: {
    docs: {
      description: {
        story: "Navigation bar shown in a complete page layout with content below.",
      },
    },
  },
};

export const InteractiveFeatures: Story = {
  name: "Interactive Features",
  render: () => (
    <BrowserRouter>
      <div>
        <Navigation />
        <div className="p-6 max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold">Navigation Features</h2>
          <ul className="list-disc list-inside space-y-2 text-[var(--component-typography-color-secondary)]">
            <li>
              <strong>Responsive Design:</strong> Automatically adapts to screen size
            </li>
            <li>
              <strong>Hamburger Menu:</strong> On mobile, click ☰ to toggle navigation
            </li>
            <li>
              <strong>Smooth Transitions:</strong> Menu animates in/out with opacity and
              height transitions
            </li>
            <li>
              <strong>Hover Effects:</strong> Links change color on hover
            </li>
            <li>
              <strong>Keyboard Accessible:</strong> All links and buttons are keyboard
              navigable
            </li>
            <li>
              <strong>ARIA Labels:</strong> Includes proper labels for screen readers
            </li>
          </ul>
        </div>
      </div>
    </BrowserRouter>
  ),
  parameters: {
    docs: {
      description: {
        story: "Overview of the navigation component's interactive features and accessibility.",
      },
    },
  },
};

export const StylingTokens: Story = {
  name: "Design System Tokens",
  render: () => (
    <BrowserRouter>
      <div>
        <Navigation />
        <div className="p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">CSS Custom Properties Used</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-[var(--primitive-color-neutral-300)] rounded p-4">
              <h3 className="font-semibold mb-2">Colors</h3>
              <ul className="text-sm space-y-1">
                <li>
                  <code>--component-nav-bg</code> - Background color
                </li>
                <li>
                  <code>--component-nav-text</code> - Text color
                </li>
                <li>
                  <code>--component-nav-text-hover</code> - Hover state color
                </li>
              </ul>
            </div>
            <div className="border border-[var(--primitive-color-neutral-300)] rounded p-4">
              <h3 className="font-semibold mb-2">Spacing & Typography</h3>
              <ul className="text-sm space-y-1">
                <li>
                  <code>--component-nav-padding</code> - Internal spacing
                </li>
                <li>
                  <code>--component-nav-gap</code> - Gap between elements
                </li>
                <li>
                  <code>--component-nav-logo-font-size</code> - Logo size
                </li>
                <li>
                  <code>--component-nav-hamburger-font-size</code> - Menu icon size
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Documentation of the CSS custom properties (design tokens) used by the navigation component.",
      },
    },
  },
};

export const ResponsiveBreakpoints: Story = {
  name: "Responsive Behavior",
  render: () => (
    <BrowserRouter>
      <div>
        <Navigation />
        <div className="p-6 max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold">Responsive Breakpoints</h2>
          <div className="space-y-3">
            <div className="border border-[var(--primitive-color-neutral-300)] rounded p-4">
              <h3 className="font-semibold mb-2">Desktop (md and above)</h3>
              <p className="text-sm text-[var(--component-typography-color-secondary)]">
                - Navigation links displayed horizontally
                <br />
                - Hamburger menu hidden
                <br />- Full-width layout with flex spacing
              </p>
            </div>
            <div className="border border-[var(--primitive-color-neutral-300)] rounded p-4">
              <h3 className="font-semibold mb-2">Mobile (below md)</h3>
              <p className="text-sm text-[var(--component-typography-color-secondary)]">
                - Hamburger menu button visible
                <br />
                - Navigation links collapse into vertical menu
                <br />
                - Toggle animation with max-height and opacity transitions
                <br />- Links stack vertically with consistent padding
              </p>
            </div>
          </div>
          <p className="text-sm text-[var(--component-typography-color-secondary)]">
            Try resizing your browser window to see the navigation adapt!
          </p>
        </div>
      </div>
    </BrowserRouter>
  ),
  parameters: {
    docs: {
      description: {
        story: "Explanation of how the navigation adapts to different screen sizes.",
      },
    },
  },
};
