import type { Meta, StoryObj } from "@storybook/react";
import { Map } from "./Map";
import { Container } from "../container";

const meta = {
  title: "Shared/Map",
  component: Map,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    mapStyle: {
      control: "select",
      options: ["default", "light", "dark", "terrain", "toner"],
      description: "Map tile layer style",
    },
  },
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

// SDSU campus center coordinates
const SDSU_CENTER: [number, number] = [32.775, -117.071];

// Sample parking lot locations
const SAMPLE_MARKERS = [
  { position: [32.7755, -117.0715] as [number, number], popup: "Parking Lot 1" },
  { position: [32.7745, -117.0705] as [number, number], popup: "Parking Lot 2" },
  { position: [32.7765, -117.0725] as [number, number], popup: "Parking Lot 3" },
];

/**
 * Default map with standard height
 * 
 * Use Cases:
 * - Embedded maps in content pages
 * - Location displays in forms
 * - Quick reference maps
 */
export const Default: Story = {
  render: (args) => (
    <div className="h-[500px]">
      <Map {...args} />
    </div>
  ),
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    markers: SAMPLE_MARKERS,
  },
};

/**
 * Full height map filling the viewport
 * 
 * Use Cases:
 * - Dedicated map pages
 * - Full-screen location pickers
 * - Main navigation maps
 * - Interactive parking lot finders
 */
export const FullHeight: Story = {
  render: (args) => (
    <div className="h-screen">
      <Map {...args} />
    </div>
  ),
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    markers: SAMPLE_MARKERS,
  },
};

/**
 * Map without markers
 * 
 * Use Cases:
 * - Location selection interfaces
 * - Area overview without specific points
 * - Base map for custom overlays
 */
export const NoMarkers: Story = {
  render: (args) => (
    <div className="h-[500px]">
      <Map {...args} />
    </div>
  ),
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    markers: [],
  },
};

/**
 * Map with single marker
 * 
 * Use Cases:
 * - Store location pages
 * - Event venue displays
 * - Specific building/lot location
 * - Address confirmation
 */
export const SingleMarker: Story = {
  render: (args) => (
    <div className="h-[500px]">
      <Map {...args} />
    </div>
  ),
  args: {
    center: SDSU_CENTER,
    zoom: 18,
    markers: [
      { position: SDSU_CENTER, popup: "SDSU Campus Center" },
    ],
  },
};

/**
 * Zoomed out view showing wider area
 * 
 * Use Cases:
 * - Regional overviews
 * - Multi-campus displays
 * - Area context maps
 * - Service area visualization
 */
export const ZoomedOut: Story = {
  render: (args) => (
    <div className="h-[500px]">
      <Map {...args} />
    </div>
  ),
  args: {
    center: SDSU_CENTER,
    zoom: 14,
    markers: SAMPLE_MARKERS,
  },
};

/**
 * Map with custom styling
 * 
 * Use Cases:
 * - Branded map displays
 * - Maps with custom borders/shadows
 * - Highlighted featured maps
 * - Design system integration examples
 */
export const CustomStyling: Story = {
  render: (args) => (
    <div className="h-[500px]">
      <Map {...args} />
    </div>
  ),
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    markers: SAMPLE_MARKERS,
    className: "border-2 border-[var(--semantic-border-emphasis)]",
  },
};

/**
 * Map in a Container with medium width
 * 
 * Use Cases:
 * - Maps within article content
 * - Location displays in blog posts
 * - Embedded directions
 * - Controlled width layouts
 */
export const InContainer: Story = {
  render: (args) => (
    <Container minWidth="md">
      <div className="h-[400px]">
        <Map {...args} />
      </div>
    </Container>
  ),
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    markers: SAMPLE_MARKERS,
  },
};

/**
 * Map in a large Container with card styling
 * 
 * Use Cases:
 * - Dashboard map widgets
 * - Feature map sections
 * - Parking lot selection cards
 * - Interactive location pickers
 */
export const InContainerCard: Story = {
  render: (args) => (
    <Container minWidth="lg" radius="lg" className="bg-white border border-[var(--semantic-border-default)] shadow-sm">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Campus Parking Locations</h2>
        <p className="text-[var(--semantic-text-secondary)] mb-4">Find available parking on the SDSU campus</p>
        <div className="h-[500px]">
          <Map {...args} />
        </div>
      </div>
    </Container>
  ),
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    markers: SAMPLE_MARKERS,
  },
};

/**
 * Compact map in small Container
 * 
 * Use Cases:
 * - Sidebar location widgets
 * - Quick reference maps
 * - Mobile-optimized views
 * - Compact location confirmations
 */
export const CompactInContainer: Story = {
  render: (args) => (
    <Container minWidth="sm">
      <div className="h-[300px]">
        <Map {...args} />
      </div>
    </Container>
  ),
  args: {
    center: SDSU_CENTER,
    zoom: 18,
    markers: [{ position: SDSU_CENTER, popup: "SDSU Campus" }],
  },
};

/**
 * Light map style (CartoDB Positron)
 * 
 * Use Cases:
 * - Clean, minimal designs
 * - Light-themed applications
 * - Focus on overlay content
 * - Professional presentations
 */
export const LightStyle: Story = {
  render: (args) => (
    <div className="h-[500px]">
      <Map {...args} />
    </div>
  ),
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    markers: SAMPLE_MARKERS,
    mapStyle: "light",
  },
};

/**
 * Dark map style (CartoDB Dark Matter)
 * 
 * Use Cases:
 * - Dark-themed applications
 * - Night mode interfaces
 * - High contrast displays
 * - Modern, sleek designs
 */
export const DarkStyle: Story = {
  render: (args) => (
    <div className="h-[500px]">
      <Map {...args} />
    </div>
  ),
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    markers: SAMPLE_MARKERS,
    mapStyle: "dark",
  },
};

/**
 * Terrain map style (Stamen Terrain)
 * 
 * Use Cases:
 * - Outdoor/hiking applications
 * - Topographic displays
 * - Geographic context
 * - Elevation awareness
 */
export const TerrainStyle: Story = {
  render: (args) => (
    <div className="h-[500px]">
      <Map {...args} />
    </div>
  ),
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    markers: SAMPLE_MARKERS,
    mapStyle: "terrain",
  },
};

/**
 * Toner map style (Stamen Toner)
 * 
 * Use Cases:
 * - High contrast needs
 * - Print-friendly maps
 * - Accessibility focus
 * - Minimalist designs
 */
export const TonerStyle: Story = {
  render: (args) => (
    <div className="h-[500px]">
      <Map {...args} />
    </div>
  ),
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    markers: SAMPLE_MARKERS,
    mapStyle: "toner",
  },
};

/**
 * Comparing all map styles side-by-side
 * 
 * Use Cases:
 * - Style selection interfaces
 * - Design system documentation
 * - Style comparison
 * - User preferences
 */
export const AllStyles: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="text-sm font-semibold mb-2">Default (OpenStreetMap)</h3>
        <div className="h-[300px]">
          <Map center={SDSU_CENTER} zoom={17} markers={SAMPLE_MARKERS} mapStyle="default" />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Light (CartoDB Positron)</h3>
        <div className="h-[300px]">
          <Map center={SDSU_CENTER} zoom={17} markers={SAMPLE_MARKERS} mapStyle="light" />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Dark (CartoDB Dark Matter)</h3>
        <div className="h-[300px]">
          <Map center={SDSU_CENTER} zoom={17} markers={SAMPLE_MARKERS} mapStyle="dark" />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Terrain (Stamen Terrain)</h3>
        <div className="h-[300px]">
          <Map center={SDSU_CENTER} zoom={17} markers={SAMPLE_MARKERS} mapStyle="terrain" />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Toner (Stamen Toner)</h3>
        <div className="h-[300px]">
          <Map center={SDSU_CENTER} zoom={17} markers={SAMPLE_MARKERS} mapStyle="toner" />
        </div>
      </div>
    </div>
  ),
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    markers: SAMPLE_MARKERS,
  },
  parameters: {
    layout: "padded",
  },
};
