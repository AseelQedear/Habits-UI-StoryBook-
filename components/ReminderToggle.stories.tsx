import React, { useState } from 'react';
import { ReminderToggle } from './ReminderToggle';
import type { Meta, StoryFn } from '@storybook/react';

const meta: Meta<typeof ReminderToggle> = {
  title: 'Components/ReminderToggle',
  component: ReminderToggle,
  argTypes: {
    label: { control: 'text' },
    darkMode: { control: 'boolean' },
  },
};
export default meta;

const Template: StoryFn<typeof ReminderToggle> = (args) => {
  const [enabled, setEnabled] = useState(args.value ?? false);
  return (
    <ReminderToggle
      {...args}
      value={enabled}
      onToggle={() => setEnabled(!enabled)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Enable Reminder',
  value: false,
  darkMode: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  label: 'Daily Reminder',
  value: true,
  darkMode: true,
};
