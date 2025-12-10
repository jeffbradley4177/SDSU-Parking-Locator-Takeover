import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/ActionListItem',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};