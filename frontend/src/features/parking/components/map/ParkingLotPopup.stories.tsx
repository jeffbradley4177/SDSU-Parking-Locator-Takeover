import type { Meta, StoryObj } from "@storybook/react";
import { ParkingLotPopup } from "./ParkingLotPopup";

/**
 * **Status:** Placeholder - needs implementation
 */
const meta = {
  title: "Features/Parking/Map/ParkingLotPopup",
  component: ParkingLotPopup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Quick information popup for map markers. Shows lot name, current status, and a link to view full details.\n\n**This component is currently a placeholder and needs to be implemented.**",
      },
    },
  },
} satisfies Meta<typeof ParkingLotPopup>;

export default meta;
type Story = StoryObj<typeof ParkingLotPopup>;

export const Default: Story = {};
