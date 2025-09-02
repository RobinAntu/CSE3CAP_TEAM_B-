import React, { useState } from 'react';
import { Card, CardContent, Button, Input, Label } from 'shadcn-ui';
import { deleteAccount } from '../../../lib/api';

const DangerZoneSection: React.FC = () => {
  const [confirm, setConfirm] = useState('');
  const [status, setStatus] = useState('');

  const handleDelete = async () => {
    try {
      await deleteAccount();
      setStatus('Account deleted');
    } catch (e) {
      setStatus('Deletion failed');
    }
  };

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <Label htmlFor="delete">Type DELETE to confirm</Label>
        <Input id="delete" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
        <Button variant="destructive" disabled={confirm !== 'DELETE'} onClick={handleDelete}>Delete Account</Button>
        {status && <p>{status}</p>}
      </CardContent>
    </Card>
  );
};

export default DangerZoneSection;
