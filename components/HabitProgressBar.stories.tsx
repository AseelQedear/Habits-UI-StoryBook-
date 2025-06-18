import { HabitProgressBar } from './HabitProgressBar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HabitProgressBar> = {
  title: 'Components/HabitProgressBar',
  component: HabitProgressBar,
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 1, step: 0.05 },
    },
    color: {
      control: 'color',
    },
    label: {
      control: 'text',
    },
    darkMode: {
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<typeof HabitProgressBar>;

export const Default: Story = {
  args: {
    progress: 0.7,
    label: 'Hydration',
    color: '#34d399',
    darkMode: false,
  },
};

export const DarkMode: Story = {
  args: {
    progress: 0.45,
    label: 'Meditation',
    color: '#22d3ee',
    darkMode: true,
  },
};
