import React, { useState } from 'react';
import { Dashboard } from './Dashboard';

const initialHabits = [
  {
    id: '1',
    title: 'Drink Water',
    icon: 'water',
    progress: 0.7,
    reminderEnabled: true,
    category: 'Health',
  },
  {
    id: '2',
    title: 'Read Book',
    icon: 'book-open',
    progress: 0.4,
    reminderEnabled: false,
    category: 'Learning',
  },
];

const initialWeek = [
  { day: 'Mon', completed: true },
  { day: 'Tue', completed: false },
  { day: 'Wed', completed: true },
  { day: 'Thu', completed: true },
  { day: 'Fri', completed: false },
  { day: 'Sat', completed: true },
  { day: 'Sun', completed: true },
];

export const HabitScreen = () => {
  const [habits] = useState(initialHabits);
  const [week] = useState(initialWeek);
  const [username] = useState('Aseel');

  return <Dashboard username={username} habits={habits} week={week} darkMode={false} />;
};
