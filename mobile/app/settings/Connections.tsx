import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

const providers = ['Google', 'GitHub', 'Microsoft'];

export default function Connections() {
  const [connected, setConnected] = useState<Record<string, boolean>>({});
  return (
    <View style={{ padding: 16 }}>
      {providers.map((p) => (
        <Card key={p} style={{ marginBottom: 8 }}>
          <Card.Title title={p} />
          <Card.Actions>
            <Button onPress={() => setConnected((c) => ({ ...c, [p]: !c[p] }))}>{connected[p] ? 'Disconnect' : 'Connect'}</Button>
          </Card.Actions>
        </Card>
      ))}
    </View>
  );
}
