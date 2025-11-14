import type { Meta, StoryObj } from "@storybook/react";
import { Selector } from "./Selector";

const meta = {
  title: "UI/Selector",
  component: Selector,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Selector>;

export default meta;
type Story = StoryObj<typeof Selector>;

export const Default: Story = {};
