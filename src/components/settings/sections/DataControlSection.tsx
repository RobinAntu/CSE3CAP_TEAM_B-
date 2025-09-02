import React, { useState } from 'react';
import { Card, CardContent, Button, Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, Textarea } from 'shadcn-ui';
import { exportData, requestDeletion } from '../../../lib/api';

const DataControlSection: React.FC = () => {
  const [reason, setReason] = useState('');
  const [open, setOpen] = useState(false);

  const exportJson = async () => {
    const blob = await exportData();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'account.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const submitDeletion = async () => {
    await requestDeletion(reason);
    setReason('');
    setOpen(false);
  };

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <Button onClick={exportJson}>Export account data</Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Request account deletion</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Request account deletion</DialogTitle>
            </DialogHeader>
            <Textarea value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Reason" />
            <Button onClick={submitDeletion} disabled={!reason}>Submit</Button>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default DataControlSection;
