import { HabitBadge } from './HabitBadge';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HabitBadge> = {
  title: 'Components/HabitBadge',
  component: HabitBadge,
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'warning', 'error'],
    },
    icon: {
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<typeof HabitBadge>;

export const Success: Story = {
  args: {
    label: 'Completed',
    type: 'success',
    icon: 'check-circle',
  },
};

export const Warning: Story = {
  args: {
    label: 'Pending',
    type: 'warning',
    icon: 'schedule',
  },
};

export const Error: Story = {
  args: {
    label: 'Missed',
    type: 'error',
    icon: 'cancel',
  },
};
