import type { Meta, StoryObj } from "@storybook/react";
import { NotificationList } from "./NotificationList";

const meta = {
  title: "Features/Notifications/NotificationList",
  component: NotificationList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Default: Story = {};
