import type { Meta, StoryObj } from "@storybook/react";
import { Caption } from "./Caption";

/**
 * Caption component for small text like labels, helper text, and metadata.
 */
const meta = {
  title: "Shared/Typography/Caption",
  component: Caption,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Small text component for captions, labels, helper text, and metadata. Uses the <small> semantic HTML element.",
      },
    },
  },
  argTypes: {
    color: {
      control: "select",
      options: ["secondary", "primary", "error"],
      description: "Caption color variant",
    },
    children: {
      control: "text",
      description: "Caption content",
    },
  },
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof Caption>;

// Basic Variants
export const Secondary: Story = {
  args: {
    color: "secondary",
    children: "This is secondary caption text (default)",
  },
};

export const Primary: Story = {
  args: {
    color: "primary",
    children: "This is primary caption text",
  },
};

export const Error: Story = {
  args: {
    color: "error",
    children: "This is error caption text",
  },
};

// Real-World Examples
export const HelperText: Story = {
  name: "Real World - Form Helper",
  render: () => (
    <div className="max-w-md space-y-2">
      <label className="block font-medium text-sm">Student ID</label>
      <input
        type="text"
        className="w-full border border-[var(--primitive-color-neutral-300)] rounded px-3 py-2"
        placeholder="123456789"
      />
      <Caption>Enter your 9-digit student ID number</Caption>
    </div>
  ),
};

export const ErrorMessage: Story = {
  name: "Real World - Validation Error",
  render: () => (
    <div className="max-w-md space-y-2">
      <label className="block font-medium text-sm">Email</label>
      <input
        type="email"
        className="w-full border-2 border-[var(--component-typography-color-error)] rounded px-3 py-2"
        placeholder="student@sdsu.edu"
        value="invalid-email"
        readOnly
      />
      <Caption color="error">Please enter a valid email address</Caption>
    </div>
  ),
};

export const Timestamp: Story = {
  name: "Real World - Timestamp",
  render: () => (
    <div className="border border-[var(--primitive-color-neutral-300)] rounded-lg p-4 max-w-md">
      <h4 className="font-semibold mb-1">Lot 7A - Available</h4>
      <p className="text-sm mb-2">45 spots remaining</p>
      <Caption>Last updated: 2 minutes ago</Caption>
    </div>
  ),
};

export const ImageCaption: Story = {
  name: "Real World - Image Caption",
  render: () => (
    <figure className="max-w-md">
      <div className="bg-[var(--primitive-color-neutral-200)] h-48 rounded-lg flex items-center justify-center mb-2">
        <span className="text-[var(--primitive-color-neutral-400)]">Parking Structure Image</span>
      </div>
      <Caption>Structure 7A entrance on Campanile Drive</Caption>
    </figure>
  ),
};

export const MetadataInfo: Story = {
  name: "Real World - Metadata",
  render: () => (
    <div className="border border-[var(--primitive-color-neutral-300)] rounded-lg p-4 max-w-md space-y-3">
      <div>
        <h4 className="font-semibold mb-1">Parking Report #4521</h4>
        <p className="text-sm mb-2">Structure 5 is currently full</p>
      </div>
      <div className="flex gap-4 text-sm">
        <div>
          <Caption>Submitted by</Caption>
          <p className="text-sm font-medium">User #1234</p>
        </div>
        <div>
          <Caption>Status</Caption>
          <p className="text-sm font-medium">Verified</p>
        </div>
        <div>
          <Caption>Time</Caption>
          <p className="text-sm font-medium">10:23 AM</p>
        </div>
      </div>
    </div>
  ),
};

export const CardFooter: Story = {
  name: "Real World - Card Footer",
  render: () => (
    <div className="border border-[var(--primitive-color-neutral-300)] rounded-lg overflow-hidden max-w-md">
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">Structure 7A</h3>
        <p className="text-2xl font-bold mb-1">234</p>
        <p className="text-sm mb-2">Available Spots</p>
      </div>
      <div className="bg-[var(--primitive-color-neutral-100)] px-4 py-2">
        <Caption>Updated every 5 minutes via user reports</Caption>
      </div>
    </div>
  ),
};

export const ImportantNote: Story = {
  name: "Real World - Important Note",
  render: () => (
    <div className="max-w-2xl bg-[var(--primitive-color-gold-50)] border border-[var(--primitive-color-gold-400)] rounded-lg p-4">
      <p className="font-medium mb-1">⚠️ Permit Required</p>
      <Caption color="primary">
        This lot requires a valid faculty/staff parking permit (Red Zone). Student permits
        are not valid in this area.
      </Caption>
    </div>
  ),
};

export const AllVariants: Story = {
  name: "All Color Variants",
  render: () => (
    <div className="space-y-4">
      <div>
        <Caption color="secondary">Secondary caption - default muted text</Caption>
      </div>
      <div>
        <Caption color="primary">Primary caption - standard text color</Caption>
      </div>
      <div>
        <Caption color="error">Error caption - validation and error messages</Caption>
      </div>
    </div>
  ),
};

export const WithIcon: Story = {
  name: "Real World - With Icons",
  render: () => (
    <div className="space-y-3 max-w-md">
      <div className="flex items-center gap-2">
        <svg
          className="w-4 h-4 text-[var(--component-typography-color-secondary)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <Caption>Last updated 5 minutes ago</Caption>
      </div>
      <div className="flex items-center gap-2">
        <svg
          className="w-4 h-4 text-[var(--component-typography-color-secondary)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <Caption>Campanile Drive, San Diego, CA</Caption>
      </div>
      <div className="flex items-center gap-2">
        <svg
          className="w-4 h-4 text-[var(--component-typography-color-error)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <Caption color="error">Permit required for parking</Caption>
      </div>
    </div>
  ),
};
