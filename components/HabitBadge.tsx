import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type BadgeType = 'success' | 'warning' | 'error';

interface HabitBadgeProps {
  label: string;
  type?: BadgeType;
  icon?: string;
}

export const HabitBadge: React.FC<HabitBadgeProps> = ({ label, type = 'success', icon }) => {
  const backgroundColor = {
    success: '#D1FAE5',
    warning: '#FEF3C7',
    error: '#FECACA',
  }[type];

  const textColor = {
    success: '#065F46',
    warning: '#92400E',
    error: '#991B1B',
  }[type];

  return (
    <View style={[styles.badge, { backgroundColor }]}>
      {icon && <MaterialIcons name={icon as any} size={16} color={textColor} style={styles.icon} />}
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
  icon: {
    marginRight: 6,
  },
});
