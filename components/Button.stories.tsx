import React from 'react';
import { Button } from './Button';
import { View } from 'react-native';

export default {
  title: 'Example/Button',
  component: Button,
};

export const Primary = () => (
  <View style={{ padding: 16 }}>
    <Button label="Primary Button" />
  </View>
);

export const CustomColor = () => (
  <View style={{ padding: 16 }}>
    <Button label="Custom Color" backgroundColor="#FF5722" />
  </View>
);

export const WithAction = () => (
  <View style={{ padding: 16 }}>
    <Button label="Click Me" onPress={() => alert('Button pressed!')} />
  </View>
);
