import type { Meta, StoryObj } from "@storybook/react";
import { Input, type InputSize } from "./Input";
import { Icon } from "../icon/Icon";

const SIZE_OPTIONS: InputSize[] = ["default"];

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A production-ready Input field component using design system tokens from `globals.css`. Simple, clean design with placeholder text. Icons are 20px (h-5 w-5).",
      },
    },
  },
  args: {
    placeholder: "Enter text...",
    size: "default",
  },
  argTypes: {
    size: {
      control: "select",
      options: SIZE_OPTIONS,
      description: "Size of the input field",
      table: {
        type: { summary: "InputSize" },
        defaultValue: { summary: "default" },
      },
    },
    error: {
      control: "boolean",
      description: "Shows error state with red 2px border",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disables the input field",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    leadingIcon: {
      control: false,
      description: "Icon displayed at the start of the input (20px size)",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    trailingIcon: {
      control: false,
      description: "Icon displayed at the end of the input (20px size)",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
      table: {
        type: { summary: "string" },
      },
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search"],
      description: "HTML input type",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text" },
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive playground to test all input props
 */
export const Playground: Story = {
  args: {
    placeholder: "Type something...",
  },
};

/**
 * Basic input without any additional props
 */
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

/**
 * Input with leading icon (20px)
 */
export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: <Icon name="search" size="md" />,
    placeholder: "Search...",
  },
};

/**
 * Input with trailing icon (20px)
 */
export const WithTrailingIcon: Story = {
  args: {
    trailingIcon: <Icon name="check" size="md" />,
    placeholder: "Verified input",
  },
};

/**
 * Input with both leading and trailing icons (20px each)
 */
export const WithBothIcons: Story = {
  args: {
    leadingIcon: <Icon name="email" size="md" />,
    trailingIcon: <Icon name="check" size="md" />,
    placeholder: "verified@email.com",
  },
};

/**
 * Disabled input state
 */
export const Disabled: Story = {
  args: {
    placeholder: "Cannot edit this",
    disabled: true,
  },
};

/**
 * Error state input with red 2px border
 */
export const Error: Story = {
  args: {
    placeholder: "invalid-email",
    error: true,
  },
};

/**
 * Error state with icons
 */
export const ErrorWithIcon: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
    leadingIcon: <Icon name="lock" size="md" />,
    trailingIcon: <Icon name="error-circle" size="md" />,
    error: true,
  },
};

/**
 * All input states displayed together
 */
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--component-page-gap-default)] w-full">
      <Input placeholder="Default state" />
      <Input placeholder="With leading icon" leadingIcon={<Icon name="search" size="md" />} />
      <Input placeholder="With trailing icon" trailingIcon={<Icon name="check" size="md" />} />
      <Input placeholder="Disabled state" disabled />
      <Input placeholder="Error state" error />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Shows all possible states of the input component",
      },
    },
  },
};

/**
 * Login form example
 */
export const LoginForm: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--component-page-gap-default)] w-full">
      <h2 className="text-[length:var(--component-typography-heading-h2-size)] font-[var(--component-typography-heading-weight-semibold)]">
        Sign In
      </h2>
      <Input
        type="email"
        placeholder="your.email@sdsu.edu"
        leadingIcon={<Icon name="email" size="md" />}
      />
      <Input
        type="password"
        placeholder="Enter your password"
        leadingIcon={<Icon name="lock" size="md" />}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Login form example matching your app's design",
      },
    },
  },
};

/**
 * Error validation example
 */
export const ValidationExample: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--component-page-gap-comfortable)] w-full">
      <Input
        type="email"
        placeholder="invalid-email"
        leadingIcon={<Icon name="email" size="md" />}
        error
      />
      <Input
        type="password"
        placeholder="123"
        leadingIcon={<Icon name="lock" size="md" />}
        trailingIcon={<Icon name="error-circle" size="md" />}
        error
      />
      <Input placeholder="ab" error />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Form validation error states with red 2px borders",
      },
    },
  },
};

/**
 * Different input types
 */
export const InputTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-[var(--component-page-gap-default)] w-full">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="email@example.com" />
      <Input type="password" placeholder="Enter password" />
      <Input type="number" placeholder="123" />
      <Input type="tel" placeholder="(555) 123-4567" />
      <Input type="url" placeholder="https://example.com" />
      <Input type="search" placeholder="Search..." />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Various HTML5 input types supported",
      },
    },
  },
};
