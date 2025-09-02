import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { applyTheme } from '../../src/theme';

export default function Appearance() {
  const [theme, setTheme] = useState<'system' | 'light' | 'dark'>('system');
  const save = () => applyTheme(theme);
  return (
    <View style={{ padding: 16 }}>
      <Text>Theme</Text>
      <Picker selectedValue={theme} onValueChange={(v) => setTheme(v)}>
        <Picker.Item label="System" value="system" />
        <Picker.Item label="Light" value="light" />
        <Picker.Item label="Dark" value="dark" />
      </Picker>
      <Button onPress={save}>Save</Button>
    </View>
  );
}
