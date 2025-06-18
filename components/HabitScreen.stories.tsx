import { HabitScreen } from './HabitScreen';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HabitScreen> = {
  title: 'Screens/HabitScreen',
  component: HabitScreen,
};
export default meta;

type Story = StoryObj<typeof HabitScreen>;

export const Default: Story = {};
