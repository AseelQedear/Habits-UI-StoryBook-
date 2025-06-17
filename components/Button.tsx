import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

interface ButtonProps {
  label: string;
  backgroundColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export const Button = ({ label, backgroundColor = '#1ea7fd', onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
