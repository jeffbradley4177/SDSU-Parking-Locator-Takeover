import type { Meta, StoryObj } from "@storybook/react";
import { LotStatusBadge } from "./LotStatusBadge";

/**
 * **Status:** Placeholder - needs implementation
 */
const meta = {
  title: "Features/Parking/Display/LotStatusBadge",
  component: LotStatusBadge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Visual indicator badge for parking lot status. Uses the design system Badge component to display availability status (Available, Busy, Full).\n\n**This component is currently a placeholder and needs to be implemented.**",
      },
    },
  },
} satisfies Meta<typeof LotStatusBadge>;

export default meta;
type Story = StoryObj<typeof LotStatusBadge>;

export const Default: Story = {};
