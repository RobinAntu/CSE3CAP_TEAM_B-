import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput, Avatar } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

export default function Profile() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const pick = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({});
    if (!res.canceled) setAvatar(res.assets[0].uri);
  };

  return (
    <View style={{ padding: 16 }}>
      <Avatar.Image size={80} source={avatar ? { uri: avatar } : undefined} />
      <Button onPress={pick}>Upload Avatar</Button>
      <TextInput label="Name" value={name} onChangeText={setName} />
      <TextInput label="Phone" value={phone} onChangeText={setPhone} />
    </View>
  );
}
