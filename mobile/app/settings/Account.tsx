import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function Account() {
  const [email, setEmail] = useState('');
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');

  return (
    <View style={{ padding: 16 }}>
      <TextInput label="Email" value={email} onChangeText={setEmail} />
      <TextInput label="Current Password" secureTextEntry value={current} onChangeText={setCurrent} />
      <TextInput label="New Password" secureTextEntry value={next} onChangeText={setNext} />
      <Button>Save</Button>
    </View>
  );
}
