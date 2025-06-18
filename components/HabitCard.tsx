import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface HabitCardProps {
  title: string;
  icon?: string;
  progress?: number; // 0 to 1
  reminderEnabled?: boolean;
  onToggleReminder?: () => void;
  darkMode?: boolean;
}

export const HabitCard: React.FC<HabitCardProps> = ({
  title,
  icon = 'star-circle-outline',
  progress = 0,
  reminderEnabled = false,
  onToggleReminder,
  darkMode = false,
}) => {
  const bgColor = darkMode ? '#1f2937' : '#ffffff';
  const textColor = darkMode ? '#f3f4f6' : '#1f2937';
  const trackColor = darkMode ? '#4b5563' : '#e5e7eb';
  const progressColor = darkMode ? '#10b981' : '#34d399';

  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <View style={styles.header}>
        <MaterialCommunityIcons name={icon as any} size={24} color={progressColor} />
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        {onToggleReminder && (
          <Switch
            value={reminderEnabled}
            onValueChange={onToggleReminder}
            thumbColor={reminderEnabled ? progressColor : '#9ca3af'}
            trackColor={{ false: '#d1d5db', true: '#a7f3d0' }}
          />
        )}
      </View>
      <View style={[styles.progressBar, { backgroundColor: trackColor }]}>
        <View
          style={[
            styles.progress,
            {
              width: `${progress * 100}%`,
              backgroundColor: progressColor,
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginLeft: 12,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    marginTop: 12,
    overflow: 'hidden',
  },
  progress: {
    height: 8,
    borderRadius: 4,
  },
});
