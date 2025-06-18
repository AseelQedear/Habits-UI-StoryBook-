import { WeeklyOverview } from './WeeklyOverview';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof WeeklyOverview> = {
  title: 'Components/WeeklyOverview',
  component: WeeklyOverview,
  argTypes: {
    darkMode: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof WeeklyOverview>;

const weekSample = [
  { day: 'Mon', completed: true },
  { day: 'Tue', completed: false },
  { day: 'Wed', completed: true },
  { day: 'Thu', completed: true },
  { day: 'Fri', completed: false },
  { day: 'Sat', completed: false },
  { day: 'Sun', completed: true },
];

export const Default: Story = {
  args: {
    week: weekSample,
    darkMode: false,
  },
};

export const DarkMode: Story = {
  args: {
    week: weekSample,
    darkMode: true,
  },
};
