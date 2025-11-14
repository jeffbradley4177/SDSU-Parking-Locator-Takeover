import type { Meta, StoryObj } from "@storybook/react";
import { ReportVerificationList } from "./ReportVerificationList";

/**
 * **Status:** Placeholder - needs implementation
 */
const meta = {
  title: "Features/Admin/Verification/ReportVerificationList",
  component: ReportVerificationList,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "List of user-submitted reports awaiting admin verification and approval.\n\n**This component is currently a placeholder and needs to be implemented.**",
      },
    },
  },
} satisfies Meta<typeof ReportVerificationList>;

export default meta;
type Story = StoryObj<typeof ReportVerificationList>;

export const Default: Story = {};
