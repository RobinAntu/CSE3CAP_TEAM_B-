import React, { useState } from 'react';
import { View } from 'react-native';
import { Switch, Text } from 'react-native-paper';

export default function Notifications() {
  const [marketing, setMarketing] = useState(true);
  const [updates, setUpdates] = useState(true);
  const [push, setPush] = useState(true);
  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Marketing Emails</Text>
        <Switch value={marketing} onValueChange={setMarketing} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Product Updates</Text>
        <Switch value={updates} onValueChange={setUpdates} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Push Alerts</Text>
        <Switch value={push} onValueChange={setPush} />
      </View>
    </View>
  );
}
