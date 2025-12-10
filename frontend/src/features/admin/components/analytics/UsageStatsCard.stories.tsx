import type { Meta, StoryObj } from "@storybook/react";
import { UsageStatsCard } from "./UsageStatsCard";

/**
 * **Status:** Placeholder - needs implementation
 */
const meta = {
  title: "Features/Admin/Analytics/UsageStatsCard",
  component: UsageStatsCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Summary card displaying key usage statistics like total reports, active users, and system health metrics.\n\n**This component is currently a placeholder and needs to be implemented.**",
      },
    },
  },
} satisfies Meta<typeof UsageStatsCard>;

export default meta;
type Story = StoryObj<typeof UsageStatsCard>;

export const Default: Story = {};
