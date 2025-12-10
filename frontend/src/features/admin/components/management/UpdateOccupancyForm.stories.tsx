import type { Meta, StoryObj } from "@storybook/react";
import { UpdateOccupancyForm } from "./UpdateOccupancyForm";

/**
 * **Status:** Placeholder - needs implementation
 */
const meta = {
  title: "Features/Admin/Management/UpdateOccupancyForm",
  component: UpdateOccupancyForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Form for administrators to manually update parking lot occupancy when automated systems are unavailable.\n\n**This component is currently a placeholder and needs to be implemented.**",
      },
    },
  },
} satisfies Meta<typeof UpdateOccupancyForm>;

export default meta;
type Story = StoryObj<typeof UpdateOccupancyForm>;

export const Default: Story = {};
