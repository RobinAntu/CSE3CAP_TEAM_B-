import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';

export default function DangerZone() {
  const [confirm, setConfirm] = useState('');
  const [status, setStatus] = useState('');

  const deleteAccount = () => {
    setStatus('Deleted');
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Type DELETE to confirm</Text>
      <TextInput value={confirm} onChangeText={setConfirm} />
      <Button mode="contained" onPress={deleteAccount} disabled={confirm !== 'DELETE'}>Delete Account</Button>
      {status && <Text>{status}</Text>}
    </View>
  );
}
