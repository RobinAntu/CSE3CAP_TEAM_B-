import React, { useState, useEffect } from 'react';
import { Card, CardContent, Label, Select, SelectTrigger, SelectContent, SelectItem, Button } from 'shadcn-ui';
import { Language, useUser } from '../../../context/UserContext';
import { updateLanguage, updateProfile } from '../../../lib/api';

const timeZones = ['UTC', 'America/New_York', 'Europe/London', 'Asia/Kolkata'];

const LanguageRegionSection: React.FC = () => {
  const { user, setUser } = useUser();
  const [language, setLanguage] = useState<Language>(user.language);
  const [zone, setZone] = useState(user.timeZone || 'UTC');
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    setDirty(language !== user.language || zone !== (user.timeZone || 'UTC'));
  }, [language, zone, user]);

  const save = async () => {
    const lang = await updateLanguage(language);
    const profile = await updateProfile({ timeZone: zone });
    setUser({ ...profile, language: lang });
    setDirty(false);
  };

  const cancel = () => {
    setLanguage(user.language);
    setZone(user.timeZone || 'UTC');
    setDirty(false);
  };

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <div>
          <Label>Language</Label>
          <Select value={language} onValueChange={(v: Language) => setLanguage(v)}>
            <SelectTrigger className="w-60" />
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="hi">हिंदी</SelectItem>
              <SelectItem value="zh">中文</SelectItem>
              <SelectItem value="ar">العربية</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Time Zone</Label>
          <Select value={zone} onValueChange={(v) => setZone(v)}>
            <SelectTrigger className="w-60" />
            <SelectContent>
              {timeZones.map((z) => (
                <SelectItem key={z} value={z}>{z}</SelectItem>
              ))}
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

export default LanguageRegionSection;
