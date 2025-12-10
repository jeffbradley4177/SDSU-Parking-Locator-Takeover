import type { Meta, StoryObj } from "@storybook/react";
import { ProfileView } from "./ProfileView";

const meta = {
  title: "Features/User/Profile/ProfileView",
  component: ProfileView,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProfileView>;

export default meta;
type Story = StoryObj<typeof ProfileView>;

export const Default: Story = {};
