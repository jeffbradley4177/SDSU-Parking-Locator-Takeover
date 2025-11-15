import type { Meta, StoryObj } from "@storybook/react";
import { MapControls } from "./MapControls";

const meta = {
  title: "Features/Parking/Map/MapControls",
  component: MapControls,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MapControls>;

export default meta;
type Story = StoryObj<typeof MapControls>;

export const Default: Story = {};
