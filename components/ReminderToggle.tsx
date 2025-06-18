import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

interface ReminderToggleProps {
  label: string;
  value: boolean;
  onToggle: () => void;
  darkMode?: boolean;
}

export const ReminderToggle: React.FC<ReminderToggleProps> = ({
  label,
  value,
  onToggle,
  darkMode = false,
}) => {
  const textColor = darkMode ? '#f3f4f6' : '#1f2937';
  const activeThumbColor = '#10b981';
  const inactiveTrackColor = darkMode ? '#4b5563' : '#d1d5db';

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onToggle}
        thumbColor={value ? activeThumbColor : '#9ca3af'}
        trackColor={{ false: inactiveTrackColor, true: '#a7f3d0' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
});
