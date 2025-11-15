import type { Meta, StoryObj } from "@storybook/react";
import { UserLocationMarker } from "./UserLocationMarker";

const meta = {
  title: "Features/Parking/Map/UserLocationMarker",
  component: UserLocationMarker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof UserLocationMarker>;

export default meta;
type Story = StoryObj<typeof UserLocationMarker>;

export const Default: Story = {};
