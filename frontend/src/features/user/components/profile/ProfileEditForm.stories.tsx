import type { Meta, StoryObj } from "@storybook/react";
import { ProfileEditForm } from "./ProfileEditForm";

const meta = {
  title: "Features/User/Profile/ProfileEditForm",
  component: ProfileEditForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ProfileEditForm>;

export default meta;
type Story = StoryObj<typeof ProfileEditForm>;

export const Default: Story = {};
