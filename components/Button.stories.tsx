import React from 'react';
import { View } from 'react-native';
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

export const Primary = () => (
  <View style={{ padding: 20 }}>
    <Button label="Primary Button" onPress={() => alert('Primary clicked')} />
  </View>
);

export const Secondary = () => (
  <View style={{ padding: 20 }}>
    <Button label="Secondary Button" backgroundColor="#gray" onPress={() => alert('Secondary clicked')} />
  </View>
);

export const CustomColor = () => (
  <View style={{ padding: 20 }}>
    <Button label="Custom Color" backgroundColor="#FF5722" onPress={() => alert('Custom clicked')} />
  </View>
);
