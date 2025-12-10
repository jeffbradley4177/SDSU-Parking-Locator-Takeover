import type { Meta, StoryObj } from "@storybook/react";
import { BusiestLotsChart } from "./BusiestLotsChart";

/**
 * **Status:** Placeholder - needs implementation
 */
const meta = {
  title: "Features/Admin/Analytics/BusiestLotsChart",
  component: BusiestLotsChart,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Chart showing the busiest parking lots by usage frequency and occupancy rates.\n\n**This component is currently a placeholder and needs to be implemented.**",
      },
    },
  },
} satisfies Meta<typeof BusiestLotsChart>;

export default meta;
type Story = StoryObj<typeof BusiestLotsChart>;

export const Default: Story = {};
