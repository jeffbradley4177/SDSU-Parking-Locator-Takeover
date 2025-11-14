import type { Meta, StoryObj } from "@storybook/react";
import { ParkingMapView } from "./ParkingMapView";

/**
 * ParkingMapView displays an interactive Leaflet map with parking lot markers.
 * This is a feature-specific wrapper around the base Map component.
 */
const meta = {
  title: "Features/Parking/Map/ParkingMapView",
  component: ParkingMapView,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Interactive OpenStreetMap showing all SDSU parking lots with markers. Built with Leaflet and React-Leaflet. Click markers to view lot information.",
      },
    },
  },
} satisfies Meta<typeof ParkingMapView>;

export default meta;
type Story = StoryObj<typeof ParkingMapView>;

export const Default: Story = {
  name: "Campus Parking Map",
  parameters: {
    docs: {
      description: {
        story:
          "Interactive map centered on SDSU campus showing all parking lot locations. Zoom and pan to explore. Click markers for lot details.",
      },
    },
  },
};

export const InPageContext: Story = {
  name: "In Page Layout",
  render: () => (
    <div className="max-w-6xl mx-auto p-6">
      <header className="mb-4">
        <h1 className="text-3xl font-bold mb-2">Campus Parking Map</h1>
        <p className="text-[var(--component-typography-color-secondary)]">
          Click on any marker to view parking lot details and current availability.
        </p>
      </header>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <ParkingMapView size="default" />
      </div>
      <div className="mt-4 text-sm text-[var(--component-typography-color-secondary)]">
        <p>Map tiles © OpenStreetMap contributors</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example showing the map in a typical page layout with header and footer.",
      },
    },
  },
};

export const Features: Story = {
  name: "Map Features",
  render: () => (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Map Features</h2>
        <ul className="list-disc list-inside space-y-2 text-[var(--component-typography-color-secondary)]">
          <li>Interactive pan and zoom controls</li>
          <li>17 parking lot markers across campus</li>
          <li>Popups showing lot names on marker click</li>
          <li>OpenStreetMap base layer</li>
          <li>Centered on SDSU campus coordinates (32.775, -117.071)</li>
          <li>Default zoom level optimized for campus view</li>
        </ul>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <ParkingMapView size="default" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Overview of the parking map's features and capabilities.",
      },
    },
  },
};

export const ParkingLots: Story = {
  name: "Covered Parking Lots",
  render: () => (
    <div className="max-w-6xl mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-bold">Parking Lots on Map</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-4">
        {[
          "Lot 1",
          "Lot 2",
          "Lot 2A",
          "Lot 2B",
          "Lot 2C",
          "Lot 3",
          "Lot 4",
          "Lot 6",
          "Lot 7",
          "Lot 10",
          "Lot 11",
          "Lot 12",
          "Lot 14",
          "Lot 15",
          "Lot 17",
          "Lot 17A",
          "Lot 17B",
        ].map((lot) => (
          <div
            key={lot}
            className="text-sm px-3 py-2 bg-[var(--primitive-color-neutral-100)] rounded"
          >
            📍 {lot}
          </div>
        ))}
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <ParkingMapView size="large" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "List of all parking lots displayed on the map with their markers.",
      },
    },
  },
};
