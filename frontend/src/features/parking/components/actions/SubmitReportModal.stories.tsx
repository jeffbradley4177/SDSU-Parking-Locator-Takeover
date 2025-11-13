import type { Meta, StoryObj } from "@storybook/react";
import { SubmitReportModal } from "./SubmitReportModal";

/**
 * **Status:** Placeholder - needs implementation
 */
const meta = {
  title: "Features/Parking/Actions/SubmitReportModal",
  component: SubmitReportModal,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Modal dialog for submitting parking lot reports. Users can report current occupancy status and number of available spots.\n\n**This component is currently a placeholder and needs to be implemented.**",
      },
    },
  },
} satisfies Meta<typeof SubmitReportModal>;

export default meta;
type Story = StoryObj<typeof SubmitReportModal>;

export const Default: Story = {};
