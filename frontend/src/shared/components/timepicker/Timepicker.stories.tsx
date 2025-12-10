import type { Meta, StoryObj } from "@storybook/react";
import { Timepicker } from "./Timepicker";

const meta = {
  title: "UI/Timepicker",
  component: Timepicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Timepicker>;

export default meta;
type Story = StoryObj<typeof Timepicker>;

export const Default: Story = {};
