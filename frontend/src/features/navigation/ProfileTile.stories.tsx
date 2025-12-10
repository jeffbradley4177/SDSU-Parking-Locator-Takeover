import type { Meta, StoryObj } from '@storybook/react';
import { ProfileTile } from './ProfileTile';

const meta = {
  title: 'Features/Navigation/ProfileTile',
  component: ProfileTile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
