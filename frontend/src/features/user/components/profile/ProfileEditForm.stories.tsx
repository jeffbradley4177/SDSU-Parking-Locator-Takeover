import type { Meta, StoryObj } from "@storybook/react";
import { ProfileEditForm } from "./ProfileEditForm";

/**
 * **Status:** Placeholder - needs implementation
 */
const meta = {
  title: "Features/User/Profile/ProfileEditForm",
  component: ProfileEditForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Profile edit form component for updating user information. This component is currently a placeholder and needs to be implemented.\n\nShould allow users to edit their personal information including name, email, phone number, and role-specific fields (student ID/major for students, employee ID/department for staff).",
      },
    },
  },
} satisfies Meta<typeof ProfileEditForm>;

export default meta;
type Story = StoryObj<typeof ProfileEditForm>;

export const Default: Story = {};
