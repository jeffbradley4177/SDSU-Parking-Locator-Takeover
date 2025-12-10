import type { Meta, StoryObj } from "@storybook/react";
import { SignupWizard } from "./SignupWizard";

/**
 * **Status:** Placeholder - needs implementation
 */
const meta = {
  title: "Features/Auth/SignupWizard",
  component: SignupWizard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Multi-step signup wizard guiding users through account creation. Includes personal info, account details, verification, and completion steps.\n\n**This component is currently a placeholder and needs to be implemented.**",
      },
    },
  },
} satisfies Meta<typeof SignupWizard>;

export default meta;
type Story = StoryObj<typeof SignupWizard>;

export const Default: Story = {};
