import React from 'react';
import { EmptyState } from './EmptyState';
import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  argTypes: {
    message: { control: 'text' },
    emoji: { control: 'text' },
    darkMode: { control: 'boolean' },
  },
};
export default meta;

const Template: StoryFn<typeof EmptyState> = (args) => {
  return <EmptyState {...args} onAction={() => alert('Add Habit Clicked')} />;
};

export const Default = Template.bind({});
Default.args = {
  emoji: '📝',
  message: 'You haven’t added any habits yet.',
  actionLabel: 'Add Habit',
  darkMode: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  emoji: '🌑',
  message: 'No habits in dark mode!',
  actionLabel: 'Create One',
  darkMode: true,
};
