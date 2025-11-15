import type { Meta, StoryObj } from "@storybook/react";
import { NotificationItem } from "./NotificationItem";

const meta = {
  title: "Features/Notifications/NotificationItem",
  component: NotificationItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Default: Story = {};
