import type { Meta, StoryObj } from "@storybook/react";
import { SummaryTile } from "./container";

const meta = {
  title: "UI/SummaryTile",
  component: SummaryTile,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SummaryTile>;

export default meta;
type Story = StoryObj<typeof SummaryTile>;

export const Default: Story = {};
