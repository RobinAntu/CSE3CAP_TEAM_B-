import React, { useState, useEffect } from 'react';
import { Card, CardContent, Label, Select, SelectTrigger, SelectContent, SelectItem, Button } from 'shadcn-ui';
import { Theme, useUser } from '../../../context/UserContext';
import { updateTheme } from '../../../lib/api';

const AppearanceSection: React.FC = () => {
  const { user, setUser } = useUser();
  const [theme, setTheme] = useState<Theme>(user.theme);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    setDirty(theme !== user.theme);
  }, [theme, user.theme]);

  const save = async () => {
    const t = await updateTheme(theme);
    setUser({ ...user, theme: t });
    setDirty(false);
  };

  const cancel = () => {
    setTheme(user.theme);
    setDirty(false);
  };

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div>
          <Label>Theme</Label>
          <Select value={theme} onValueChange={(v: Theme) => setTheme(v)}>
            <SelectTrigger className="w-60" />
            <SelectContent>
              <SelectItem value="system">System</SelectItem>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex space-x-2">
          <Button disabled={!dirty} onClick={save}>Save</Button>
          <Button variant="secondary" disabled={!dirty} onClick={cancel}>Cancel</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppearanceSection;
