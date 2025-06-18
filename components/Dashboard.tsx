import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { WeeklyOverview } from './WeeklyOverview';
import { HabitList } from './HabitList';
import { EmptyState } from './EmptyState';

interface DashboardProps {
  username: string;
  habits: any[];
  week: { day: string; completed: boolean }[];
  darkMode?: boolean;
}

export const Dashboard: React.FC<DashboardProps> = ({ username, habits, week, darkMode = false }) => {
  const textColor = darkMode ? '#f3f4f6' : '#1f2937';
  const bgColor = darkMode ? '#111827' : '#ffffff';

  return (
    <ScrollView style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.title, { color: textColor }]}>👋 Hello, {username}!</Text>
      <Text style={[styles.subtitle, { color: textColor }]}>Here's your progress this week:</Text>

      <WeeklyOverview week={week} darkMode={darkMode} />

      <Text style={[styles.sectionTitle, { color: textColor }]}>Your Habits</Text>

      {habits.length === 0 ? (
        <EmptyState
          message="You haven’t added any habits yet."
          emoji="📭"
          darkMode={darkMode}
          onAction={() => alert('Navigate to habit creation')}
          actionLabel="Add Habit"
        />
      ) : (
        <HabitList habits={habits} darkMode={darkMode} groupByCategory={true} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
});
