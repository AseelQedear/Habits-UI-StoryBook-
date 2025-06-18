import { HabitCard } from './HabitCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HabitCard> = {
  title: 'Components/HabitCard',
  component: HabitCard,
  argTypes: {
    icon: {
      control: 'text',
    },
    progress: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
    reminderEnabled: {
      control: 'boolean',
    },
    darkMode: {
      control: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<typeof HabitCard>;

export const Default: Story = {
  args: {
    title: 'Read 10 Pages',
    icon: 'book-outline',
    progress: 0.4,
    reminderEnabled: false,
    darkMode: false,
  },
};

export const DarkMode: Story = {
  args: {
    title: 'Drink Water',
    icon: 'water',
    progress: 0.8,
    reminderEnabled: true,
    darkMode: true,
  },
};
