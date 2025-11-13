import type { Meta, StoryObj } from "@storybook/react";
import { AdminHeader } from "./AdminHeader";

/**
 * **Status:** Placeholder - needs implementation
 */
const meta = {
  title: "Features/Admin/Verification/AdminHeader",
  component: AdminHeader,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Header component for admin dashboard pages. Includes navigation between dashboard sections, user profile, and admin-specific actions.\n\n**This component is currently a placeholder and needs to be implemented.**",
      },
    },
  },
} satisfies Meta<typeof AdminHeader>;

export default meta;
type Story = StoryObj<typeof AdminHeader>;

export const Default: Story = {};
