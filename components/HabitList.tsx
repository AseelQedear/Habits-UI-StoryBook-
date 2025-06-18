import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { HabitCard } from './HabitCard';

interface HabitItem {
  id: string;
  title: string;
  icon?: string;
  progress?: number;
  reminderEnabled?: boolean;
  category?: string;
}

interface HabitListProps {
  habits: HabitItem[];
  groupByCategory?: boolean;
  darkMode?: boolean;
}

export const HabitList: React.FC<HabitListProps> = ({ habits, groupByCategory = false, darkMode = false }) => {
  if (!habits || habits.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={[styles.emptyText, darkMode && { color: '#ccc' }]}>
          No habits yet. Add a new one to get started!
        </Text>
      </View>
    );
  }

  if (groupByCategory) {
    const grouped = habits.reduce<Record<string, HabitItem[]>>((acc, habit) => {
      const category = habit.category || 'Other';
      acc[category] = acc[category] || [];
      acc[category].push(habit);
      return acc;
    }, {});

    return (
      <View>
        {Object.entries(grouped).map(([category, items]) => (
          <View key={category} style={styles.group}>
            <Text style={[styles.groupTitle, darkMode && { color: '#ddd' }]}>{category}</Text>
            {items.map((habit) => (
              <HabitCard key={habit.id} {...habit} darkMode={darkMode} />
            ))}
          </View>
        ))}
      </View>
    );
  }

  return (
    <FlatList
      data={habits}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <HabitCard {...item} darkMode={darkMode} />}
    />
  );
};

const styles = StyleSheet.create({
  group: {
    marginBottom: 16,
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    marginLeft: 4,
  },
  emptyContainer: {
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#777',
  },
});
