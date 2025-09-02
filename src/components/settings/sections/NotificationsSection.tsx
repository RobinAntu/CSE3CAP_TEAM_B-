import React, { useState, useEffect } from 'react';
import { Card, CardContent, Switch, Label, Button } from 'shadcn-ui';
import { useUser } from '../../../context/UserContext';
import { updateNotifications } from '../../../lib/api';

const NotificationsSection: React.FC = () => {
  const { user, setUser } = useUser();
  const [prefs, setPrefs] = useState({
    marketingEmails: user.marketingEmails,
    productUpdates: user.productUpdates,
    pushAlerts: user.pushAlerts,
  });
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    setDirty(
      prefs.marketingEmails !== user.marketingEmails ||
        prefs.productUpdates !== user.productUpdates ||
        prefs.pushAlerts !== user.pushAlerts
    );
  }, [prefs, user]);

  const save = async () => {
    const updated = await updateNotifications(prefs);
    setUser({ ...user, ...updated } as any);
    setDirty(false);
  };

  const cancel = () => {
    setPrefs({
      marketingEmails: user.marketingEmails,
      productUpdates: user.productUpdates,
      pushAlerts: user.pushAlerts,
    });
    setDirty(false);
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        {(
          [
            ['marketingEmails', 'Marketing Emails'],
            ['productUpdates', 'Product Updates'],
            ['pushAlerts', 'Push Alerts'],
          ] as const
        ).map(([key, label]) => (
          <div key={key} className="flex items-center space-x-4">
            <Label htmlFor={key}>{label}</Label>
            <Switch
              id={key}
              checked={prefs[key]}
              onCheckedChange={(v) => setPrefs((p) => ({ ...p, [key]: v }))}
            />
          </div>
        ))}
        <div className="flex space-x-2">
          <Button disabled={!dirty} onClick={save}>Save</Button>
          <Button variant="secondary" disabled={!dirty} onClick={cancel}>Cancel</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationsSection;
