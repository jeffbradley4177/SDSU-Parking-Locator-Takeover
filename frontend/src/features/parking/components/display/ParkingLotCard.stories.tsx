import type { Meta, StoryObj } from "@storybook/react";
import { ParkingLotCard } from "./ParkingLotCard";

/**
 * **Status:** Placeholder - needs implementation
 */
const meta = {
  title: "Features/Parking/Display/ParkingLotCard",
  component: ParkingLotCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Summary card displaying parking lot information. Used in list views and grids to show lot name, status, availability, and last update time.\n\n**This component is currently a placeholder and needs to be implemented.**",
      },
    },
  },
} satisfies Meta<typeof ParkingLotCard>;

export default meta;
type Story = StoryObj<typeof ParkingLotCard>;

export const Default: Story = {};
