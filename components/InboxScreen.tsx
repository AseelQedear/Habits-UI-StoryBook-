import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HabitList } from './HabitList';
import type { Habit } from './HabitCard';

const sampleHabits: Habit[] = [
  { id: '1', label: 'Drink Water', streak: 5, state: 'HABIT_ACTIVE' },
  { id: '2', label: 'Read 10 Pages', streak: 12, state: 'HABIT_ACTIVE' },
  { id: '3', label: 'Walk 5k Steps', streak: 7, state: 'HABIT_PINNED' },
  { id: '4', label: 'Meditate', streak: 3, state: 'HABIT_ARCHIVED' },
];

export const InboxScreen = ({ loading = false }: { loading?: boolean }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <HabitList
        loading={loading}
        habits={sampleHabits}
        onPinHabit={() => {}}
        onArchiveHabit={() => {}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
