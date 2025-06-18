import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HabitProgressBarProps {
  progress: number; // 0 to 1
  label?: string;
  color?: string;
  darkMode?: boolean;
}

export const HabitProgressBar: React.FC<HabitProgressBarProps> = ({
  progress,
  label,
  color = '#34d399',
  darkMode = false,
}) => {
  const trackColor = darkMode ? '#374151' : '#e5e7eb';
  const textColor = darkMode ? '#f3f4f6' : '#1f2937';

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, { color: textColor }]}>{label}</Text>}
      <View style={[styles.track, { backgroundColor: trackColor }]}>
        <View
          style={[
            styles.bar,
            {
              width: `${Math.min(Math.max(progress, 0), 1) * 100}%`,
              backgroundColor: color,
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
  },
  track: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  bar: {
    height: 8,
    borderRadius: 4,
  },
});
