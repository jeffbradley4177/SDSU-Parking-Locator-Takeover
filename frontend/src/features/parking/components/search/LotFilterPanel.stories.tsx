import type { Meta, StoryObj } from "@storybook/react";
import { LotFilterPanel } from "./LotFilterPanel";

const meta = {
  title: "Features/Parking/Search/LotFilterPanel",
  component: LotFilterPanel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LotFilterPanel>;

export default meta;
type Story = StoryObj<typeof LotFilterPanel>;

export const Default: Story = {};
