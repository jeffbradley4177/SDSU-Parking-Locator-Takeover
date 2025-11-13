import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

/**
 * Link component for semantic anchor elements with consistent styling.
 */
const meta = {
  title: "Shared/Typography/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Semantic link component with multiple style variants. Use for navigation and interactive text elements.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "inline", "button"],
      description: "Link style variant",
    },
    href: {
      control: "text",
      description: "URL or path",
    },
    children: {
      control: "text",
      description: "Link text",
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

// Basic Variants
export const Default: Story = {
  args: {
    variant: "default",
    href: "#",
    children: "Default link - underlines on hover",
  },
};

export const Inline: Story = {
  args: {
    variant: "inline",
    href: "#",
    children: "Inline link - always underlined",
  },
};

export const Button: Story = {
  args: {
    variant: "button",
    href: "#",
    children: "Button link - no underline",
  },
};

// All Variants
export const AllVariants: Story = {
  name: "All Link Variants",
  render: () => (
    <div className="space-y-4">
      <div>
        <Link variant="default" href="#">
          Default variant
        </Link>
        <p className="text-sm text-[var(--component-typography-color-secondary)] mt-1">
          No underline by default, underlines on hover
        </p>
      </div>
      <div>
        <Link variant="inline" href="#">
          Inline variant
        </Link>
        <p className="text-sm text-[var(--component-typography-color-secondary)] mt-1">
          Always underlined, changes color on hover
        </p>
      </div>
      <div>
        <Link variant="button" href="#">
          Button variant
        </Link>
        <p className="text-sm text-[var(--component-typography-color-secondary)] mt-1">
          No underline, changes color on hover
        </p>
      </div>
    </div>
  ),
};

// Real-World Examples
export const Navigation: Story = {
  name: "Real World - Navigation Links",
  render: () => (
    <nav className="flex gap-6 border-b border-[var(--primitive-color-neutral-300)] pb-4">
      <Link variant="button" href="#home">
        Home
      </Link>
      <Link variant="button" href="#map">
        Map
      </Link>
      <Link variant="button" href="#about">
        About
      </Link>
      <Link variant="button" href="#profile">
        Profile
      </Link>
    </nav>
  ),
};

export const InlineText: Story = {
  name: "Real World - Inline in Paragraph",
  render: () => (
    <div className="max-w-2xl">
      <p className="leading-relaxed">
        The SDSU Parking Locator helps you find available parking spots across campus. For
        more information about parking permits, please visit the{" "}
        <Link variant="inline" href="#">
          Transportation Services website
        </Link>{" "}
        or contact the parking office. You can also{" "}
        <Link variant="inline" href="#">
          view the campus map
        </Link>{" "}
        to locate specific parking structures.
      </p>
    </div>
  ),
};

export const CardLinks: Story = {
  name: "Real World - Card Actions",
  render: () => (
    <div className="border border-[var(--primitive-color-neutral-300)] rounded-lg p-4 max-w-md">
      <h3 className="font-semibold text-lg mb-2">Structure 7A</h3>
      <p className="text-sm mb-2">234 spots available</p>
      <p className="text-sm text-[var(--component-typography-color-secondary)] mb-4">
        Last updated: 5 minutes ago
      </p>
      <div className="flex gap-4">
        <Link variant="default" href="#details">
          View Details
        </Link>
        <Link variant="default" href="#directions">
          Get Directions
        </Link>
        <Link variant="default" href="#report">
          Submit Report
        </Link>
      </div>
    </div>
  ),
};

export const Footer: Story = {
  name: "Real World - Footer Links",
  render: () => (
    <footer className="bg-[var(--primitive-color-neutral-100)] p-6 rounded-lg">
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2">
            <li>
              <Link variant="button" href="#">
                Parking Map
              </Link>
            </li>
            <li>
              <Link variant="button" href="#">
                Permit Information
              </Link>
            </li>
            <li>
              <Link variant="button" href="#">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2">
            <li>
              <Link variant="button" href="#">
                Contact Us
              </Link>
            </li>
            <li>
              <Link variant="button" href="#">
                Report Issue
              </Link>
            </li>
            <li>
              <Link variant="button" href="#">
                Guidelines
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link variant="button" href="#">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link variant="button" href="#">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link variant="button" href="#">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  ),
};

export const Breadcrumbs: Story = {
  name: "Real World - Breadcrumb Navigation",
  render: () => (
    <nav className="flex items-center gap-2 text-sm">
      <Link variant="button" href="#">
        Home
      </Link>
      <span className="text-[var(--component-typography-color-secondary)]">/</span>
      <Link variant="button" href="#">
        Parking
      </Link>
      <span className="text-[var(--component-typography-color-secondary)]">/</span>
      <span className="text-[var(--component-typography-color-secondary)]">Structure 7A</span>
    </nav>
  ),
};

export const ListLinks: Story = {
  name: "Real World - Link List",
  render: () => (
    <div className="max-w-md border border-[var(--primitive-color-neutral-300)] rounded-lg divide-y divide-[var(--primitive-color-neutral-300)]">
      <div className="p-4 hover:bg-[var(--primitive-color-neutral-50)] transition-colors">
        <Link variant="button" href="#" className="font-medium block">
          Structure 7A - North Campus
        </Link>
        <p className="text-sm text-[var(--component-typography-color-secondary)] mt-1">
          234 spots available
        </p>
      </div>
      <div className="p-4 hover:bg-[var(--primitive-color-neutral-50)] transition-colors">
        <Link variant="button" href="#" className="font-medium block">
          Lot 12 - East Campus
        </Link>
        <p className="text-sm text-[var(--component-typography-color-secondary)] mt-1">
          12 spots available
        </p>
      </div>
      <div className="p-4 hover:bg-[var(--primitive-color-neutral-50)] transition-colors">
        <Link variant="button" href="#" className="font-medium block">
          Structure 5 - West Campus
        </Link>
        <p className="text-sm text-[var(--component-typography-color-secondary)] mt-1">
          Full - 0 spots available
        </p>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  name: "Real World - With Icons",
  render: () => (
    <div className="space-y-3">
      <Link variant="default" href="#" className="flex items-center gap-2">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
        View Campus Map
      </Link>
      <Link variant="default" href="#" className="flex items-center gap-2">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Learn More
      </Link>
      <Link variant="default" href="#" className="flex items-center gap-2">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
        External Link
      </Link>
    </div>
  ),
};

export const SkipLink: Story = {
  name: "Real World - Accessibility Skip Link",
  render: () => (
    <div className="relative">
      <Link
        variant="button"
        href="#main-content"
        className="absolute -top-full focus:top-0 bg-[var(--component-typography-color-link)] text-white px-4 py-2 rounded focus:outline-none focus:ring-2"
      >
        Skip to main content
      </Link>
      <div className="mt-12">
        <p className="text-sm text-[var(--component-typography-color-secondary)]">
          Try tabbing to see the skip link (accessibility feature)
        </p>
      </div>
    </div>
  ),
};
