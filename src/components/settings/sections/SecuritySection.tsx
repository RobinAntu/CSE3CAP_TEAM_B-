import React, { useState } from 'react';
import { Card, CardContent, Switch, Label, Button, Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from 'shadcn-ui';
import { useUser } from '../../../context/UserContext';
import { toggle2FA } from '../../../lib/api';

const SecuritySection: React.FC = () => {
  const { user, setUser } = useUser();
  const [enabled, setEnabled] = useState(user.twoFAEnabled);
  const [open, setOpen] = useState(false);

  const handleToggle = async (v: boolean) => {
    if (v) setOpen(true);
    else {
      const val = await toggle2FA(false);
      setEnabled(val);
      setUser({ ...user, twoFAEnabled: val });
    }
  };

  const confirmEnable = async () => {
    const val = await toggle2FA(true);
    setEnabled(val);
    setUser({ ...user, twoFAEnabled: val });
    setOpen(false);
  };

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <div className="flex items-center space-x-4">
          <Label htmlFor="2fa">Two-Factor Authentication</Label>
          <Switch id="2fa" checked={enabled} onCheckedChange={handleToggle} />
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Enable Two-Factor Authentication</DialogTitle>
            </DialogHeader>
            <div className="space-y-2">
              <div className="w-32 h-32 bg-gray-200" aria-label="QR code placeholder" />
              <ul className="text-sm list-disc pl-5">
                <li>ABCDEF12</li>
                <li>3456GHIJ</li>
                <li>KLMN7890</li>
              </ul>
              <Button onClick={confirmEnable}>Finish Setup</Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default SecuritySection;
