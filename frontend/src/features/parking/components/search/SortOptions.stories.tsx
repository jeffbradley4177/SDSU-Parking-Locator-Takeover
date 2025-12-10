import type { Meta, StoryObj } from "@storybook/react";
import { SortOptions } from "./SortOptions";

const meta = {
  title: "Features/Parking/Search/SortOptions",
  component: SortOptions,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof SortOptions>;

export default meta;
type Story = StoryObj<typeof SortOptions>;

export const Default: Story = {};
