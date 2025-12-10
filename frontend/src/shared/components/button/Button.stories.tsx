import type { Meta, StoryObj } from "@storybook/react";
import type { ButtonProps } from "./Button";
import { Button, type ButtonVariant } from "./Button";
import { BiHome, BiRightArrowAlt, BiTrash } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";

const VARIANT_OPTIONS: ButtonVariant[] = [
  "primary",
  "secondary",
  "outline",
  "destructive",
  "google",
  "teal",
];

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A production-ready Button component using design system tokens from `globals.css`. Supports variants, loading states, icons, and is optimized with React.memo for performance.",
      },
    },
  },
  args: {
    children: "Click me",
    variant: "primary",
    size: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: VARIANT_OPTIONS,
      description: "Visual style variant of the button",
      table: {
        type: { summary: "ButtonVariant" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "select",
      options: ["default"],
      description: "Size of the button (currently only default size available)",
      table: {
        type: { summary: "ButtonSize" },
        defaultValue: { summary: "default" },
      },
    },
    isLoading: {
      control: "boolean",
      description: "Shows loading spinner and disables button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    leadingIcon: {
      control: false,
      description: "Icon from react-icons displayed before button text",
      table: {
        type: { summary: "IconType" },
      },
    },
    trailingIcon: {
      control: false,
      description: "Icon from react-icons displayed after button text",
      table: {
        type: { summary: "IconType" },
      },
    },
    onClick: {
      action: "clicked",
      description: "Click event handler",
    },
    children: {
      control: "text",
      description: "Button label text",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

/**
 * Default playground story for interactive testing
 */
export const Playground: Story = {};

/**
 * Primary button variant - main call-to-action
 */
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

/**
 * Secondary button variant - less prominent actions
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

/**
 * Outline button variant - tertiary actions
 */
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

/**
 * Destructive button variant - dangerous actions
 */
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Delete",
  },
};

/**
 * Google button variant - OAuth sign-in
 */
export const Google: Story = {
  args: {
    variant: "google",
    leadingIcon: FcGoogle,
    children: "Sign in with Google",
  },
};

/**
 * Teal button variant - accent color alternative
 */
export const Teal: Story = {
  args: {
    variant: "teal",
    children: "Teal Button",
  },
};

/**
 * All button variants displayed together
 */
export const AllVariants: Story = {
  render: (args: ButtonProps) => (
    <div className="flex flex-wrap items-center gap-[var(--component-page-gap-tight)]">
      {VARIANT_OPTIONS.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Button>
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Shows all available button variants side by side.",
      },
    },
  },
};

/**
 * Button in loading state
 */
export const Loading: Story = {
  args: {
    isLoading: true,
    children: "Loading...",
  },
  parameters: {
    docs: {
      description: {
        story: "Loading state displays a spinner and disables interaction.",
      },
    },
  },
};

/**
 * All variants in loading state
 */
export const LoadingStates: Story = {
  render: (args: ButtonProps) => (
    <div className="flex flex-wrap items-center gap-[var(--component-page-gap-tight)]">
      {VARIANT_OPTIONS.map((variant) => (
        <Button key={variant} {...args} variant={variant} isLoading>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Button>
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "All button variants in loading state.",
      },
    },
  },
};

/**
 * Disabled button state
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled buttons cannot be interacted with.",
      },
    },
  },
};

/**
 * Button with leading icon
 */
export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: BiHome,
    children: "Go Home",
  },
  parameters: {
    docs: {
      description: {
        story: "Buttons can display an icon before the text.",
      },
    },
  },
};

/**
 * Button with trailing icon
 */
export const WithTrailingIcon: Story = {
  args: {
    trailingIcon: BiRightArrowAlt,
    children: "Continue",
  },
  parameters: {
    docs: {
      description: {
        story: "Buttons can display an icon after the text.",
      },
    },
  },
};

/**
 * Button with both leading and trailing icons
 */
export const WithBothIcons: Story = {
  args: {
    leadingIcon: BiHome,
    trailingIcon: BiRightArrowAlt,
    children: "Home & Continue",
  },
  parameters: {
    docs: {
      description: {
        story: "Buttons can display icons on both sides.",
      },
    },
  },
};

/**
 * Icon-only button (no text)
 */
export const IconOnly: Story = {
  args: {
    leadingIcon: BiTrash,
    children: undefined,
    "aria-label": "Delete",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Icon-only buttons should include an aria-label for accessibility.",
      },
    },
  },
};

/**
 * Destructive action with icon
 */
export const DestructiveWithIcon: Story = {
  args: {
    variant: "destructive",
    leadingIcon: BiTrash,
    children: "Delete Account",
  },
  parameters: {
    docs: {
      description: {
        story: "Destructive actions with icons for clear visual communication.",
      },
    },
  },
};

/**
 * Complex example with multiple states
 */
export const InteractiveDemo: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--component-page-gap-comfortable)]">
      <div className="flex flex-wrap gap-[var(--component-page-gap-tight)]">
        <Button variant="primary" leadingIcon={BiHome}>
          Home
        </Button>
        <Button variant="secondary">Cancel</Button>
        <Button variant="outline" trailingIcon={BiRightArrowAlt}>
          Next
        </Button>
      </div>

      <div className="flex flex-wrap gap-[var(--component-page-gap-tight)]">
        <Button variant="primary" isLoading>
          Saving...
        </Button>
        <Button variant="destructive" leadingIcon={BiTrash}>
          Delete
        </Button>
        <Button variant="outline" disabled>
          Unavailable
        </Button>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Comprehensive example showing various button combinations and states.",
      },
    },
  },
};
