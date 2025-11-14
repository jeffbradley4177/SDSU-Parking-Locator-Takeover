import type { Meta, StoryObj } from "@storybook/react";
import { Map } from "./Map";

const meta = {
  title: "Shared/Map",
  component: Map,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
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

export const Default: Story = {
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    size: "default",
    markers: SAMPLE_MARKERS,
  },
};

export const Large: Story = {
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    size: "large",
    markers: SAMPLE_MARKERS,
  },
};

export const NoMarkers: Story = {
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    size: "default",
    markers: [],
  },
};

export const SingleMarker: Story = {
  args: {
    center: SDSU_CENTER,
    zoom: 18,
    size: "default",
    markers: [
      { position: SDSU_CENTER, popup: "SDSU Campus Center" },
    ],
  },
};

export const ZoomedOut: Story = {
  args: {
    center: SDSU_CENTER,
    zoom: 14,
    size: "default",
    markers: SAMPLE_MARKERS,
  },
};

export const CustomStyling: Story = {
  args: {
    center: SDSU_CENTER,
    zoom: 17,
    size: "default",
    markers: SAMPLE_MARKERS,
    className: "border-2 border-[var(--semantic-border-emphasis)]",
  },
};
