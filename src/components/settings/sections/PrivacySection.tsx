import React, { useState } from 'react';
import { Card, CardContent, Switch, Label, Button } from 'shadcn-ui';
import { updatePrivacy, exportData } from '../../../lib/api';

const PrivacySection: React.FC = () => {
  const [prefs, setPrefs] = useState({ discoverable: true, onlineStatus: true });
  const [dirty, setDirty] = useState(false);

  const toggle = (key: 'discoverable' | 'onlineStatus', val: boolean) => {
    setPrefs((p) => ({ ...p, [key]: val }));
    setDirty(true);
  };

  const save = async () => {
    await updatePrivacy(prefs);
    setDirty(false);
  };

  const cancel = () => {
    setPrefs({ discoverable: true, onlineStatus: true });
    setDirty(false);
  };

  const download = async () => {
    const blob = await exportData();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center space-x-4">
          <Label htmlFor="discoverable">Profile Discoverable</Label>
          <Switch id="discoverable" checked={prefs.discoverable} onCheckedChange={(v) => toggle('discoverable', v)} />
        </div>
        <div className="flex items-center space-x-4">
          <Label htmlFor="online">Show Online Status</Label>
          <Switch id="online" checked={prefs.onlineStatus} onCheckedChange={(v) => toggle('onlineStatus', v)} />
        </div>
        <div className="flex space-x-2">
          <Button disabled={!dirty} onClick={save}>Save</Button>
          <Button variant="secondary" disabled={!dirty} onClick={cancel}>Cancel</Button>
        </div>
        <Button variant="outline" onClick={download}>Download my data</Button>
      </CardContent>
    </Card>
  );
};

export default PrivacySection;
