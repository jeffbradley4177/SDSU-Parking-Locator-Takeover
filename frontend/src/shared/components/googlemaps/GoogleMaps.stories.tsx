import type { Meta, StoryObj } from "@storybook/react";
import { GoogleMaps } from "./GoogleMaps";

/**
 * GoogleMaps component displays an interactive Google Maps view.
 * This is a shared component that can be used throughout the application
 * for displaying location-based information using Google Maps API.
 */
const meta = {
  title: "Shared/GoogleMaps",
  component: GoogleMaps,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Interactive Google Maps component for displaying locations and markers. Supports custom zoom levels, center positions, and marker configurations.",
      },
    },
  },
} satisfies Meta<typeof GoogleMaps>;

export default meta;
type Story = StoryObj<typeof meta>;

// SDSU campus center coordinates
const SDSU_CENTER: [number, number] = [32.775, -117.071];

// Sample parking lot locations around SDSU
const SAMPLE_MARKERS = [
  { position: [32.7755, -117.0715] as [number, number], title: "Parking Lot 1" },
  { position: [32.7745, -117.0705] as [number, number], title: "Parking Lot 2" },
  { position: [32.7765, -117.0725] as [number, number], title: "Parking Lot 3" },
];

export const Default: Story = {
  name: "Default View",
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    size: "default",
    markers: SAMPLE_MARKERS,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Default Google Maps view centered on SDSU campus with sample parking lot markers.",
      },
    },
  },
};

export const Large: Story = {
  name: "Large Size",
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    size: "large",
    markers: SAMPLE_MARKERS,
  },
  parameters: {
    docs: {
      description: {
        story: "Larger map view suitable for full-page layouts.",
      },
    },
  },
};

export const NoMarkers: Story = {
  name: "No Markers",
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    size: "default",
    markers: [],
  },
  parameters: {
    docs: {
      description: {
        story: "Map without any markers, showing just the base map layer.",
      },
    },
  },
};

export const SingleMarker: Story = {
  name: "Single Marker",
  args: {
    center: SDSU_CENTER,
    zoom: 18,
    size: "default",
    markers: [
      { position: SDSU_CENTER, title: "SDSU Campus Center" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Map with a single marker at the campus center with higher zoom level.",
      },
    },
  },
};

export const ZoomedOut: Story = {
  name: "Zoomed Out View",
  args: {
    center: SDSU_CENTER,
    zoom: 14,
    size: "default",
    markers: SAMPLE_MARKERS,
  },
  parameters: {
    docs: {
      description: {
        story: "Wider view of the area around SDSU campus with lower zoom level.",
      },
    },
  },
};

export const CustomStyling: Story = {
  name: "Custom Styling",
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    size: "default",
    markers: SAMPLE_MARKERS,
    className: "border-2 border-[var(--semantic-border-emphasis)] rounded-lg shadow-lg",
  },
  parameters: {
    docs: {
      description: {
        story: "Map with custom border and styling applied via className prop.",
      },
    },
  },
};

export const InPageContext: Story = {
  name: "In Page Layout",
  render: () => (
    <div className="max-w-6xl mx-auto p-6">
      <header className="mb-4">
        <h1 className="text-3xl font-bold mb-2">Campus Location</h1>
        <p className="text-[var(--component-typography-color-secondary)]">
          Find parking locations across the SDSU campus using Google Maps.
        </p>
      </header>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <GoogleMaps
          center={SDSU_CENTER}
          zoom={17}
          size="default"
          markers={SAMPLE_MARKERS}
        />
      </div>
      <div className="mt-4 text-sm text-[var(--component-typography-color-secondary)]">
        <p>Map data © Google</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example showing the Google Maps component in a typical page layout with header and footer.",
      },
    },
  },
};
