import type { Meta, StoryObj } from "@storybook/react";
import { Filter } from "./Filter";

const meta = {
  title: "UI/Filter",
  component: Filter,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof Filter>;

export const Default: Story = {};
