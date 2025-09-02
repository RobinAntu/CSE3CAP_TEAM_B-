import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

const timeZones = ['UTC', 'America/New_York', 'Europe/London', 'Asia/Kolkata'];

export default function LanguageRegion() {
  const [language, setLanguage] = useState('en');
  const [zone, setZone] = useState('UTC');
  return (
    <View style={{ padding: 16 }}>
      <Text>Language</Text>
      <Picker selectedValue={language} onValueChange={(v) => setLanguage(v)}>
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Español" value="es" />
        <Picker.Item label="Français" value="fr" />
        <Picker.Item label="हिंदी" value="hi" />
        <Picker.Item label="中文" value="zh" />
        <Picker.Item label="العربية" value="ar" />
      </Picker>
      <Text>Time Zone</Text>
      <Picker selectedValue={zone} onValueChange={(v) => setZone(v)}>
        {timeZones.map((z) => (
          <Picker.Item key={z} label={z} value={z} />
        ))}
      </Picker>
      <Button>Save</Button>
    </View>
  );
}
