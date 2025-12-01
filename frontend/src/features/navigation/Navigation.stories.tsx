import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "./Navigation";
import { Text } from "@/shared/components/typography";

/**
 * Navigation bar component with fixed width layout and icon-based design.
 * Features Menu icon (left), Logo monogram (center), and Profile icon (right).
 */
const meta = {
  title: "Features/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Fixed-width navigation bar (445px × 44px) with icon-based layout. Uses design system tokens for consistent styling. Menu and Profile icons are placeholders for future functionality.",
      },
    },
  },
  args: {
    brandName: "SDSU Parking Locator",
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  name: "Default",
  parameters: {
    docs: {
      description: {
        story: "Navigation bar with Menu icon (left), Logo monogram (center), and Profile icon (right).",
      },
    },
  },
};

export const WithBackground: Story = {
  name: "With Page Background",
  render: () => (
    <div className="bg-[var(--component-page-bg)] p-8">
      <Navigation />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Navigation bar shown against the application page background.",
      },
    },
  },
};

export const StylingTokens: Story = {
  name: "Design System Tokens",
  render: () => (
    <div className="space-y-6">
      <Navigation />
      <div className="max-w-2xl p-6 bg-white rounded-lg shadow">
        <Text as="h2" level="h3" className="mb-4">CSS Custom Properties Used</Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-[var(--primitive-color-neutral-300)] rounded p-4">
            <Text as="h3" level="h5" className="mb-2">Dimensions</Text>
            <ul className="text-sm space-y-1">
              <li><code>--component-nav-width</code> - 445px</li>
              <li><code>--component-nav-height</code> - 44px</li>
            </ul>
          </div>
          <div className="border border-[var(--primitive-color-neutral-300)] rounded p-4">
            <Text as="h3" level="h5" className="mb-2">Padding</Text>
            <ul className="text-sm space-y-1">
              <li><code>--component-nav-padding-block</code> - 12px</li>
              <li><code>--component-nav-padding-inline</code> - 16px</li>
            </ul>
          </div>
          <div className="border border-[var(--primitive-color-neutral-300)] rounded p-4">
            <Text as="h3" level="h5" className="mb-2">Colors</Text>
            <ul className="text-sm space-y-1">
              <li><code>--component-nav-bg</code> - Background</li>
              <li><code>--component-nav-text</code> - Text color</li>
              <li><code>--component-nav-icon</code> - Icon color</li>
            </ul>
          </div>
          <div className="border border-[var(--primitive-color-neutral-300)] rounded p-4">
            <Text as="h3" level="h5" className="mb-2">Shape</Text>
            <ul className="text-sm space-y-1">
              <li><code>--component-nav-radius</code> - Border radius</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "Documentation of the CSS custom properties (design tokens) used by the navigation component.",
      },
    },
  },
};
