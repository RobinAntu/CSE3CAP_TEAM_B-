import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Button, Switch, Text } from 'react-native-paper';

export default function Security() {
  const [enabled, setEnabled] = useState(false);

  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <Text>Two-Factor Authentication</Text>
        <Switch value={enabled} onValueChange={setEnabled} />
      </View>
      {enabled && (
        <View>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={{ width: 100, height: 100 }} />
        </View>
      )}
    </View>
  );
}
