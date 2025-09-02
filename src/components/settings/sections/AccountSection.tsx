import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, Input, Label, Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogFooter } from 'shadcn-ui';
import { updateProfile, updatePassword } from '../../../lib/api';
import { useUser } from '../../../context/UserContext';
import { validatePassword } from '../../../lib/validators';

const AccountSection: React.FC = () => {
  const { user, setUser } = useUser();
  const [email, setEmail] = useState(user.email);
  const [passwords, setPasswords] = useState({ current: '', next: '', confirm: '' });
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    setDirty(email !== user.email || passwords.current !== '' || passwords.next !== '' || passwords.confirm !== '');
  }, [email, passwords, user.email]);

  const saveEmail = async () => {
    const updated = await updateProfile({ email });
    setUser(updated);
  };

  const savePassword = async () => {
    if (!validatePassword(passwords.next) || passwords.next !== passwords.confirm) return;
    await updatePassword(passwords.current, passwords.next);
    setPasswords({ current: '', next: '', confirm: '' });
  };

  const cancel = () => {
    setEmail(user.email);
    setPasswords({ current: '', next: '', confirm: '' });
    setDirty(false);
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-2">Change Email</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Email Change</DialogTitle>
              </DialogHeader>
              <p>Are you sure you want to change your email to {email}?</p>
              <DialogFooter>
                <Button onClick={saveEmail}>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div>
            <Label htmlFor="current">Current Password</Label>
            <Input id="current" type="password" value={passwords.current} onChange={(e) => setPasswords({ ...passwords, current: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="next">New Password</Label>
            <Input id="next" type="password" value={passwords.next} onChange={(e) => setPasswords({ ...passwords, next: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="confirm">Confirm Password</Label>
            <Input id="confirm" type="password" value={passwords.confirm} onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })} />
          </div>
        </div>
        <div className="flex space-x-2">
          <Button disabled={!dirty} onClick={savePassword}>Save</Button>
          <Button variant="secondary" disabled={!dirty} onClick={cancel}>Cancel</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountSection;
