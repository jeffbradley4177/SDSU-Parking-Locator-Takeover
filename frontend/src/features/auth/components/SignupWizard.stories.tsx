import type { Meta, StoryObj } from "@storybook/react";
import { SignupWizard } from "./SignupWizard";
import { AuthProvider } from "@/shared/contexts/AuthContext";

const meta = {
  title: "Features/Auth/SignupWizard",
  component: SignupWizard,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Multi-step signup wizard with progress tracking. Includes role selection, account details, personal information, and completion steps. Features a red progress bar to track user progress through the signup flow.",
      },
    },
  },
  argTypes: {
    onComplete: { action: "completed" },
    onCancel: { action: "cancelled" },
  },
  decorators: [
    (Story) => (
      <AuthProvider>
        <div 
          className="min-h-screen flex items-center justify-center bg-[var(--component-page-bg)]"
          style={{
            paddingInline: "var(--component-page-padding-inline)",
            paddingBlock: "var(--component-page-padding-block)",
          }}
        >
          <Story />
        </div>
      </AuthProvider>
    ),
  ],
} satisfies Meta<typeof SignupWizard>;

export default meta;
type Story = StoryObj<typeof SignupWizard>;

export const Default: Story = {};
