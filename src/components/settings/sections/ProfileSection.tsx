import React, { useState, useEffect } from 'react';
import { Card, CardContent, Button, Input, Label, Avatar } from 'shadcn-ui';
import { useUser } from '../../../context/UserContext';
import { validateName, validatePhone } from '../../../lib/validators';
import { updateProfile } from '../../../lib/api';

const ProfileSection: React.FC = () => {
  const { user, setUser } = useUser();
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone || '');
  const [avatar, setAvatar] = useState<File | null>(null);
  const [preview, setPreview] = useState(user.avatarUrl);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    setDirty(name !== user.name || phone !== (user.phone || '') || avatar !== null);
  }, [name, phone, avatar, user]);

  const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setAvatar(file || null);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const save = async () => {
    if (!validateName(name) || (phone && !validatePhone(phone))) return;
    const updated = await updateProfile({ name, phone, avatarUrl: preview });
    setUser(updated);
    setDirty(false);
  };

  const cancel = () => {
    setName(user.name);
    setPhone(user.phone || '');
    setAvatar(null);
    setPreview(user.avatarUrl);
    setDirty(false);
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center space-x-4">
          <Avatar src={preview} className="w-24 h-24" />
          <div>
            <Label htmlFor="avatar">Avatar</Label>
            <Input id="avatar" type="file" accept="image/*" onChange={handleAvatar} />
          </div>
        </div>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" value={user.email} readOnly />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="flex space-x-2">
          <Button disabled={!dirty} onClick={save}>Save</Button>
          <Button variant="secondary" disabled={!dirty} onClick={cancel}>Cancel</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSection;
