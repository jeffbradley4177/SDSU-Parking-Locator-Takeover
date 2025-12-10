import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";

const meta = {
  title: "UI/Progress",
  component: Progress,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    max: {
      control: { type: "number" },
    },
    showValue: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
    showValue: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutValue: Story = {
  args: {
    value: 65,
    showValue: false,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Complete: Story = {
  args: {
    value: 100,
    showValue: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Started: Story = {
  args: {
    value: 15,
    showValue: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const VariousValues: Story = {
  render: () => (
    <div className="flex flex-col gap-6" style={{ width: '400px' }}>
      <div>
        <p className="text-sm mb-2 text-[color:var(--semantic-text-secondary)]">Starting (15%)</p>
        <Progress value={15} showValue />
      </div>
      <div>
        <p className="text-sm mb-2 text-[color:var(--semantic-text-secondary)]">Half Way (50%)</p>
        <Progress value={50} showValue />
      </div>
      <div>
        <p className="text-sm mb-2 text-[color:var(--semantic-text-secondary)]">Almost Done (85%)</p>
        <Progress value={85} showValue />
      </div>
      <div>
        <p className="text-sm mb-2 text-[color:var(--semantic-text-secondary)]">Complete (100%)</p>
        <Progress value={100} showValue />
      </div>
    </div>
  ),
};
