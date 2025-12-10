import type { Meta, StoryObj } from "@storybook/react";
import { LotMarkerCluster } from "./LotMarkerCluster";

const meta = {
  title: "Features/Parking/Map/LotMarkerCluster",
  component: LotMarkerCluster,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LotMarkerCluster>;

export default meta;
type Story = StoryObj<typeof LotMarkerCluster>;

export const Default: Story = {};
