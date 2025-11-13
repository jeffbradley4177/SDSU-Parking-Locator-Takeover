import type { Meta, StoryObj } from "@storybook/react";
import { LotStatusTable } from "./LotStatusTable";

/**
 * **Status:** Placeholder - needs implementation
 */
const meta = {
  title: "Features/Admin/Management/LotStatusTable",
  component: LotStatusTable,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Admin table displaying real-time status, occupancy, and details for all parking lots in the system.\n\n**This component is currently a placeholder and needs to be implemented.**",
      },
    },
  },
} satisfies Meta<typeof LotStatusTable>;

export default meta;
type Story = StoryObj<typeof LotStatusTable>;

export const Default: Story = {};
