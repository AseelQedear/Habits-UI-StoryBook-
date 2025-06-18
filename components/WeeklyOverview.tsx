import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DayStatus {
  day: string; // e.g., 'Mon', 'Tue'
  completed: boolean;
}

interface WeeklyOverviewProps {
  week: DayStatus[];
  darkMode?: boolean;
}

export const WeeklyOverview: React.FC<WeeklyOverviewProps> = ({ week, darkMode = false }) => {
  const textColor = darkMode ? '#f3f4f6' : '#1f2937';
  const completedColor = darkMode ? '#10b981' : '#34d399';
  const missedColor = darkMode ? '#f87171' : '#ef4444';

  return (
    <View style={styles.container}>
      {week.map((day, index) => (
        <View key={index} style={styles.dayBox}>
          <Text style={[styles.dayText, { color: textColor }]}>{day.day}</Text>
          <View
            style={[
              styles.circle,
              {
                backgroundColor: day.completed ? completedColor : missedColor,
              },
            ]}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 8,
    gap: 12,
  },
  dayBox: {
    alignItems: 'center',
  },
  dayText: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 4,
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
});
