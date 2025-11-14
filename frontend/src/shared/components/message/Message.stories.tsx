import type { Meta, StoryObj } from "@storybook/react";
import Message from "./Message";

/**
 * Message component displays a customizable heading message.
 */
const meta = {
  title: "Shared/Message",
  component: Message,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Simple message component that displays a heading with customizable title text.",
      },
    },
  },
  args: {
    title: "Here to help you find parking urgently",
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof Message>;

export const Default: Story = {
  name: "Default Message",
};

export const CustomMessage: Story = {
  name: "Custom Message",
  args: {
    title: "Welcome to SDSU Parking Locator",
  },
};

export const InContext: Story = {
  name: "In Page Context",
  render: (args) => (
    <div className="max-w-4xl mx-auto text-center py-8">
      <Message {...args} />
      <p className="text-[var(--component-typography-color-secondary)] mt-4">
        Use our real-time parking locator to find available spots across campus
      </p>
    </div>
  ),
};
