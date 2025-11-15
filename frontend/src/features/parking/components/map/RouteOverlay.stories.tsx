import type { Meta, StoryObj } from "@storybook/react";
import { RouteOverlay } from "./RouteOverlay";

const meta = {
  title: "Features/Parking/Map/RouteOverlay",
  component: RouteOverlay,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof RouteOverlay>;

export default meta;
type Story = StoryObj<typeof RouteOverlay>;

export const Default: Story = {};
