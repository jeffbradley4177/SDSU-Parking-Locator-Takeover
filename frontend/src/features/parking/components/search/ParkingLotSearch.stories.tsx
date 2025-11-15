import type { Meta, StoryObj } from "@storybook/react";
import { ParkingLotSearch } from "./ParkingLotSearch";

const meta = {
  title: "Features/Parking/Search/ParkingLotSearch",
  component: ParkingLotSearch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ParkingLotSearch>;

export default meta;
type Story = StoryObj<typeof ParkingLotSearch>;

export const Default: Story = {};
