import type { Meta, StoryObj } from "@storybook/react";
import { NotificationBell } from "./NotificationBell";

const meta = {
  title: "Features/Notifications/NotificationBell",
  component: NotificationBell,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NotificationBell>;

export default meta;
type Story = StoryObj<typeof NotificationBell>;

export const Default: Story = {};
