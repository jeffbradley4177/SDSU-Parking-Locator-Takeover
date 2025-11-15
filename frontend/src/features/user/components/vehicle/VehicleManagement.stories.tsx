import type { Meta, StoryObj } from "@storybook/react";
import { VehicleManagement } from "./VehicleManagement";

const meta = {
  title: "Features/User/Vehicle/VehicleManagement",
  component: VehicleManagement,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof VehicleManagement>;

export default meta;
type Story = StoryObj<typeof VehicleManagement>;

export const Default: Story = {};
