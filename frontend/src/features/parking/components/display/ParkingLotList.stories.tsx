import type { Meta, StoryObj } from "@storybook/react";
import { ParkingLotList } from "./ParkingLotList";
import { Text } from "@/shared/components/typography";

/**
 * ParkingLotList displays an interactive table of all parking lots.
 */
const meta = {
  title: "Features/Parking/Display/ParkingLotList",
  component: ParkingLotList,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Interactive table listing all parking lots with their current status and last update time. Clicking a row opens a dialog to update the lot's status.",
      },
    },
  },
} satisfies Meta<typeof ParkingLotList>;

export default meta;
type Story = StoryObj<typeof ParkingLotList>;

export const Default: Story = {
  name: "Full Parking Lot List",
  parameters: {
    docs: {
      description: {
        story:
          "Complete list of all SDSU parking lots. Click any row to open the status update dialog.",
      },
    },
  },
};

export const InPageContext: Story = {
  name: "In Page Layout",
  render: () => (
    <div className="max-w-4xl mx-auto">
      <header className="mb-6">
        <Text as="h1" level="h1" className="mb-2">SDSU Parking Availability</Text>
        <Text color="secondary">
          View current parking lot conditions and help keep the information updated by
          submitting your own report.
        </Text>
      </header>
      <div className="bg-white rounded-lg shadow">
        <ParkingLotList />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example showing the parking lot list in a typical page layout.",
      },
    },
  },
};

export const InteractiveDemo: Story = {
  name: "Interactive Features",
  parameters: {
    docs: {
      description: {
        story:
          "This component includes:\n\n" +
          "- **Interactive rows**: Click or press Enter/Space to open status dialog\n" +
          "- **Native dialog**: Uses HTML <dialog> element for status updates\n" +
          "- **Real-time updates**: Status changes reflect immediately in the table\n" +
          "- **Keyboard accessible**: Full keyboard navigation support\n\n" +
          "Try clicking on any parking lot to update its status.",
      },
    },
  },
  render: () => <ParkingLotList />,
};
