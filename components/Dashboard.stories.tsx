import { Dashboard } from './Dashboard';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dashboard> = {
  title: 'Screens/Dashboard',
  component: Dashboard,
};
export default meta;

type Story = StoryObj<typeof Dashboard>;

const weekSample = [
  { day: 'Mon', completed: true },
  { day: 'Tue', completed: false },
  { day: 'Wed', completed: true },
  { day: 'Thu', completed: true },
  { day: 'Fri', completed: false },
  { day: 'Sat', completed: false },
  { day: 'Sun', completed: true },
];

const sampleHabits = [
  {
    id: '1',
    title: 'Drink Water',
    icon: 'water',
    progress: 0.6,
    reminderEnabled: true,
    category: 'Health',
  },
  {
    id: '2',
    title: 'Read Book',
    icon: 'book-open',
    progress: 0.3,
    reminderEnabled: false,
    category: 'Learning',
  },
];

export const Default: Story = {
  args: {
    username: 'Aseel',
    week: weekSample,
    habits: sampleHabits,
    darkMode: false,
  },
};

export const DarkMode: Story = {
  args: {
    username: 'Aseel',
    week: weekSample,
    habits: sampleHabits,
    darkMode: true,
  },
};

export const EmptyHabits: Story = {
  args: {
    username: 'Aseel',
    week: weekSample,
    habits: [],
    darkMode: false,
  },
};
