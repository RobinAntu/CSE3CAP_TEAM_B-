import React from 'react';
import { Card, CardContent, Button } from 'shadcn-ui';
import { useUser } from '../../../context/UserContext';
import { connectApp, disconnectApp } from '../../../lib/api';

const providers: { provider: 'google' | 'github' | 'microsoft'; label: string }[] = [
  { provider: 'google', label: 'Google' },
  { provider: 'github', label: 'GitHub' },
  { provider: 'microsoft', label: 'Microsoft' },
];

const ConnectionsSection: React.FC = () => {
  const { user, setUser } = useUser();

  const toggle = async (p: 'google' | 'github' | 'microsoft', connected: boolean) => {
    if (connected) await disconnectApp(p); else await connectApp(p);
    setUser({
      ...user,
      connectedApps: user.connectedApps.map((a) => (a.provider === p ? { provider: p, connected: !connected } : a)),
    });
  };

  return (
    <Card>
      <CardContent className="pt-6 grid gap-4 md:grid-cols-3">
        {providers.map((p) => {
          const app = user.connectedApps.find((a) => a.provider === p.provider);
          const connected = app?.connected;
          return (
            <div key={p.provider} className="border rounded p-4 space-y-2">
              <h3 className="font-medium">{p.label}</h3>
              <Button onClick={() => toggle(p.provider, !!connected)}>{connected ? 'Disconnect' : 'Connect'}</Button>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ConnectionsSection;
