import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";

/**
 * Mobile-first login form with email/password authentication and Google OAuth.
 * Uses design system tokens for consistent spacing and touch-friendly targets.
 */
const meta = {
  title: "Features/Auth/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Authentication form for all user types (students, faculty, staff, admin). Supports email/password login and Google OAuth. Mobile-first design with responsive layout.",
      },
    },
  },
  argTypes: {
    onSubmit: { action: "submitted" },
    onGoogleSignIn: { action: "google-sign-in" },
    onCreateAccount: { action: "create-account" },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", maxWidth: "400px" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default state - empty form ready for user input
 */
export const Default: Story = {};

/**
 * Loading state - form is submitting
 */
export const Loading: Story = {
  args: {
    isLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the loading state when form is being submitted. All inputs and buttons are disabled.",
      },
    },
  },
};

/**
 * Error state - displays error message
 */
export const WithError: Story = {
  args: {
    error: "Invalid email or password. Please try again.",
  },
  parameters: {
    docs: {
      description: {
        story: "Shows error message when login fails. Error is displayed above the form fields.",
      },
    },
  },
};

/**
 * Mobile viewport (375px width)
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story: "Login form at mobile viewport width (375px). Form takes full width with proper padding.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "375px", padding: "16px" }}>
        <Story />
      </div>
    ),
  ],
};
