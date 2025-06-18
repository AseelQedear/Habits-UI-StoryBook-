import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface EmptyStateProps {
  message?: string;
  emoji?: string;
  onAction?: () => void;
  actionLabel?: string;
  darkMode?: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  message = 'No habits yet!',
  emoji = '📭',
  onAction,
  actionLabel = 'Add New Habit',
  darkMode = false,
}) => {
  const textColor = darkMode ? '#d1d5db' : '#374151';
  const buttonBg = darkMode ? '#10b981' : '#34d399';
  const buttonTextColor = '#fff';

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={[styles.message, { color: textColor }]}>{message}</Text>
      {onAction && (
        <Pressable style={[styles.button, { backgroundColor: buttonBg }]} onPress={onAction}>
          <Text style={[styles.buttonText, { color: buttonTextColor }]}>{actionLabel}</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  message: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
