import { HabitList } from './HabitList';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HabitList> = {
  title: 'Components/HabitList',
  component: HabitList,
  argTypes: {
    groupByCategory: { control: 'boolean' },
    darkMode: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof HabitList>;

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
  {
    id: '3',
    title: 'Meditate',
    icon: 'meditation',
    progress: 0.8,
    reminderEnabled: true,
    category: 'Health',
  },
];

export const DefaultList: Story = {
  args: {
    habits: sampleHabits,
    groupByCategory: false,
    darkMode: false,
  },
};

export const GroupedList: Story = {
  args: {
    habits: sampleHabits,
    groupByCategory: true,
    darkMode: false,
  },
};

export const EmptyHabitList: Story = {
  args: {
    habits: [],
    groupByCategory: false,
    darkMode: false,
  },
};
