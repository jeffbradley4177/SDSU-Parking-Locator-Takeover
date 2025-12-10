import type { Meta, StoryObj } from "@storybook/react";
import { RoleSelector } from "./RoleSelector";
import { useState } from "react";
import type { UserRole } from "@/shared/types";

const meta = {
  title: "Features/Auth/RoleSelector",
  component: RoleSelector,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Role selection component for signup flow. Users choose between Student or Faculty/Staff account types. The component features a continue button that becomes enabled once a role is selected.",
      },
    },
  },
  argTypes: {
    onSelect: { action: "role selected" },
    onContinue: { action: "continue clicked" },
    onCancel: { action: "cancelled" },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[500px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof RoleSelector>;

export default meta;
type Story = StoryObj<typeof RoleSelector>;

export const Default: Story = {
  args: {
    selectedRole: null,
  },
};

export const StudentSelected: Story = {
  args: {
    selectedRole: "STUDENT",
  },
};

export const StaffSelected: Story = {
  args: {
    selectedRole: "STAFF",
  },
};

export const Interactive: Story = {
  render: () => {
    const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
    return (
      <RoleSelector
        selectedRole={selectedRole}
        onSelect={setSelectedRole}
        onContinue={() => console.log("Continue with role:", selectedRole)}
        onCancel={() => console.log("Cancelled")}
      />
    );
  },
};
