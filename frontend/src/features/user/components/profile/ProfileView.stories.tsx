import type { Meta, StoryObj } from "@storybook/react";
import { ProfileView } from "./ProfileView";

const meta = {
  title: "Features/User/Profile/ProfileView",
  component: ProfileView,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Presentational component for displaying user profile information. Shows user details including username, email, role badge, submitted reports section, and sign out button. Used by the Profile page component.",
      },
    },
  },
  argTypes: {
    onSignOut: { action: "signed out" },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[600px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProfileView>;

export default meta;
type Story = StoryObj<typeof ProfileView>;

export const StudentProfile: Story = {
  args: {
    username: "john_doe",
    email: "john.doe@sdsu.edu",
    role: "STUDENT",
  },
};

export const StaffProfile: Story = {
  args: {
    username: "jane_smith",
    email: "jane.smith@sdsu.edu",
    role: "STAFF",
  },
};

export const AdminProfile: Story = {
  args: {
    username: "admin_user",
    email: "admin@sdsu.edu",
    role: "ADMIN",
  },
};

export const WithoutSignOut: Story = {
  args: {
    username: "view_only",
    email: "viewer@sdsu.edu",
    role: "STUDENT",
    onSignOut: undefined,
  },
};
