import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

/**
 * Text component for body content with multiple variants and color options.
 */
const meta = {
  title: "Shared/Typography/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Body text component with consistent styling from design tokens. Supports multiple sizes and semantic color variants.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["body", "body-sm", "caption"],
      description: "Text size variant",
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "inverse", "link", "error"],
      description: "Text color variant",
    },
    children: {
      control: "text",
      description: "Text content",
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

// Basic Variants
export const Body: Story = {
  args: {
    variant: "body",
    color: "primary",
    children: "This is default body text. Use this for most paragraph content.",
  },
};

export const BodySmall: Story = {
  args: {
    variant: "body-sm",
    color: "primary",
    children: "This is small body text. Use for secondary content or compact layouts.",
  },
};

export const CaptionVariant: Story = {
  args: {
    variant: "caption",
    color: "secondary",
    children: "This is caption text. Use for labels, hints, and metadata.",
  },
};

// Color Variants
export const Primary: Story = {
  args: {
    variant: "body",
    color: "primary",
    children: "Primary text color - the default for most content.",
  },
};

export const Secondary: Story = {
  args: {
    variant: "body",
    color: "secondary",
    children: "Secondary text color - muted, for less prominent information.",
  },
};

export const LinkColor: Story = {
  args: {
    variant: "body",
    color: "link",
    children: "Link color - use for text that should appear as a link.",
  },
};

export const ErrorColor: Story = {
  args: {
    variant: "body",
    color: "error",
    children: "Error color - use for error messages and validation feedback.",
  },
};

export const Inverse: Story = {
  args: {
    variant: "body",
    color: "inverse",
    children: "Inverse text color - light text for dark backgrounds.",
  },
  decorators: [
    (Story) => (
      <div className="bg-[var(--semantic-color-bg-dark)] p-4 rounded">
        <Story />
      </div>
    ),
  ],
};

// Combinations
export const AllSizes: Story = {
  name: "All Size Variants",
  render: () => (
    <div className="space-y-4">
      <Text variant="body">Body text - standard paragraph size</Text>
      <Text variant="body-sm">Body small - slightly smaller for compact layouts</Text>
      <Text variant="caption">Caption text - smallest size for metadata</Text>
    </div>
  ),
};

export const AllColors: Story = {
  name: "All Color Variants",
  render: () => (
    <div className="space-y-4">
      <Text color="primary">Primary - default text color</Text>
      <Text color="secondary">Secondary - muted text color</Text>
      <Text color="link">Link - interactive text color</Text>
      <Text color="error">Error - validation and error messages</Text>
      <div className="bg-[var(--semantic-color-bg-dark)] p-4 rounded">
        <Text color="inverse">Inverse - light text on dark backgrounds</Text>
      </div>
    </div>
  ),
};

// Real-World Examples
export const ParagraphContent: Story = {
  name: "Real World - Paragraph",
  render: () => (
    <div className="max-w-2xl space-y-4">
      <Text>
        The SDSU Parking Locator helps students, faculty, and staff find available parking
        spots across campus in real-time. Our system aggregates data from parking
        structures and surface lots to provide accurate availability information.
      </Text>
      <Text color="secondary">
        Updates are provided by users like you. Help keep the information current by
        reporting parking conditions when you arrive on campus.
      </Text>
    </div>
  ),
};

export const CardContent: Story = {
  name: "Real World - Card",
  render: () => (
    <div className="border border-[var(--primitive-color-neutral-300)] rounded-lg p-4 max-w-md">
      <h3 className="text-lg font-semibold mb-2">Structure 7A</h3>
      <Text className="mb-2">234 spots available</Text>
      <Text variant="body-sm" color="secondary" className="mb-3">
        Last updated: 5 minutes ago by user #1234
      </Text>
      <Text variant="caption" color="secondary">
        Located on Campanile Drive near the Engineering Building
      </Text>
    </div>
  ),
};

export const FormHelper: Story = {
  name: "Real World - Form Helper",
  render: () => (
    <div className="max-w-md space-y-2">
      <label className="block font-medium">Email Address</label>
      <input
        type="email"
        className="w-full border border-[var(--primitive-color-neutral-300)] rounded px-3 py-2"
        placeholder="student@sdsu.edu"
      />
      <Text variant="body-sm" color="secondary">
        Use your SDSU email address to verify your student status
      </Text>
    </div>
  ),
};

export const ErrorMessage: Story = {
  name: "Real World - Error State",
  render: () => (
    <div className="max-w-md space-y-2">
      <label className="block font-medium">Password</label>
      <input
        type="password"
        className="w-full border-2 border-[var(--component-typography-color-error)] rounded px-3 py-2"
        placeholder="••••••••"
      />
      <Text variant="body-sm" color="error">
        Password must be at least 8 characters long
      </Text>
    </div>
  ),
};

export const MixedContent: Story = {
  name: "Real World - Mixed Variants",
  render: () => (
    <div className="max-w-2xl space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Parking Report Guidelines</h2>
        <Text className="mb-4">
          Help us maintain accurate parking information by following these guidelines when
          submitting reports:
        </Text>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <Text variant="body-sm">Only report current conditions you can verify</Text>
          </li>
          <li>
            <Text variant="body-sm">Include specific lot numbers when possible</Text>
          </li>
          <li>
            <Text variant="body-sm">Update existing reports rather than creating duplicates</Text>
          </li>
        </ul>
      </div>
      <Text variant="caption" color="secondary">
        Reports are reviewed by our moderation team within 5 minutes
      </Text>
    </div>
  ),
};
