import type { Meta, StoryObj } from "@storybook/react";
import { RoleSelector } from "./RoleSelector";

/**
 * **Status:** Placeholder - needs implementation
 */
const meta = {
  title: "Features/Auth/RoleSelector",
  component: RoleSelector,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Role selection component for signup. Users choose between Student, Faculty/Staff, or other account types.\n\n**This component is currently a placeholder and needs to be implemented.**",
      },
    },
  },
} satisfies Meta<typeof RoleSelector>;

export default meta;
type Story = StoryObj<typeof RoleSelector>;

export const Default: Story = {};
