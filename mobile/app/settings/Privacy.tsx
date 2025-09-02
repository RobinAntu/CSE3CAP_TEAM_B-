import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Switch, Text } from 'react-native-paper';
import * as FileSystem from "expo-file-system";
import * as Sharing from 'expo-sharing';

export default function Privacy() {
  const [discoverable, setDiscoverable] = useState(true);
  const [online, setOnline] = useState(true);

  const download = async () => {
    const fileUri = FileSystem.cacheDirectory + 'data.json';
    await FileSystem.writeAsStringAsync(fileUri, JSON.stringify({}));
    await Sharing.shareAsync(fileUri);
  };

  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Profile Discoverable</Text>
        <Switch value={discoverable} onValueChange={setDiscoverable} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Show Online Status</Text>
        <Switch value={online} onValueChange={setOnline} />
      </View>
      <Button onPress={download}>Download my data</Button>
    </View>
  );
}
