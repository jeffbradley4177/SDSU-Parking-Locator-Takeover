import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";

/**
 * **Status:** Placeholder - needs implementation
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
          "Authentication form for all user types (students, faculty, staff, admin). Connects to /api/admin/login endpoint and handles role-based routing.\n\n**This component is currently a placeholder and needs to be implemented.**",
      },
    },
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};
