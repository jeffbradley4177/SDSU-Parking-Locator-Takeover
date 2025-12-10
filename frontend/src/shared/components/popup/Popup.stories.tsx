import type { Meta, StoryObj } from "@storybook/react";
import { Popup } from "./Popup";

const meta = {
  title: "UI/Popup",
  component: Popup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof Popup>;

export const Default: Story = {};
