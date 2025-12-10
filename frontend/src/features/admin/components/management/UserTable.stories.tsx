import type { Meta, StoryObj } from "@storybook/react";
import { UserTable } from "./UserTable";

/**
 * **Status:** Placeholder - needs implementation
 */
const meta = {
  title: "Features/Admin/Management/UserTable",
  component: UserTable,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Admin table for viewing and managing user accounts. Supports sorting, filtering, and bulk actions.\n\n**This component is currently a placeholder and needs to be implemented.**",
      },
    },
  },
} satisfies Meta<typeof UserTable>;

export default meta;
type Story = StoryObj<typeof UserTable>;

export const Default: Story = {};
