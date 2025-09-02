import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Dialog, Portal, TextInput } from 'react-native-paper';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

export default function DataControls() {
  const [visible, setVisible] = useState(false);
  const [reason, setReason] = useState('');

  const exportData = async () => {
    const uri = FileSystem.cacheDirectory + 'data.json';
    await FileSystem.writeAsStringAsync(uri, JSON.stringify({}));
    await Sharing.shareAsync(uri);
  };

  return (
    <View style={{ padding: 16 }}>
      <Button onPress={exportData}>Export account data</Button>
      <Button onPress={() => setVisible(true)}>Request account deletion</Button>
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Request deletion</Dialog.Title>
          <Dialog.Content>
            <TextInput value={reason} onChangeText={setReason} placeholder="Reason" />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Cancel</Button>
            <Button onPress={() => setVisible(false)} disabled={!reason}>Submit</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}
