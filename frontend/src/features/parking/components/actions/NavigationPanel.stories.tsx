import type { Meta, StoryObj } from "@storybook/react";
import { NavigationPanel } from "./NavigationPanel";

/**
 * **Status:** Placeholder - needs implementation
 */
const meta = {
  title: "Features/Parking/Actions/NavigationPanel",
  component: NavigationPanel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Provides navigation and directions to selected parking lots. Integrates with the MapService backend to generate routes.\n\n**This component is currently a placeholder and needs to be implemented.**",
      },
    },
  },
} satisfies Meta<typeof NavigationPanel>;

export default meta;
type Story = StoryObj<typeof NavigationPanel>;

export const Default: Story = {};
