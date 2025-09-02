import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'shadcn-ui';
import ProfileSection from './sections/ProfileSection';
import AccountSection from './sections/AccountSection';
import SecuritySection from './sections/SecuritySection';
import NotificationsSection from './sections/NotificationsSection';
import PrivacySection from './sections/PrivacySection';
import AppearanceSection from './sections/AppearanceSection';
import LanguageRegionSection from './sections/LanguageRegionSection';
import ConnectionsSection from './sections/ConnectionsSection';
import DataControlSection from './sections/DataControlSection';
import DangerZoneSection from './sections/DangerZoneSection';

const SettingsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Settings</h1>
      <p className="text-muted-foreground mb-6">Manage your account settings and preferences.</p>
      <Tabs defaultValue="profile" className="flex flex-col md:flex-row gap-4">
        <TabsList className="flex md:flex-col w-full md:w-60">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="language">Language & Region</TabsTrigger>
          <TabsTrigger value="connections">Connections</TabsTrigger>
          <TabsTrigger value="data">Data Controls</TabsTrigger>
          <TabsTrigger value="danger">Danger Zone</TabsTrigger>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="profile"><ProfileSection /></TabsContent>
          <TabsContent value="account"><AccountSection /></TabsContent>
          <TabsContent value="security"><SecuritySection /></TabsContent>
          <TabsContent value="notifications"><NotificationsSection /></TabsContent>
          <TabsContent value="privacy"><PrivacySection /></TabsContent>
          <TabsContent value="appearance"><AppearanceSection /></TabsContent>
          <TabsContent value="language"><LanguageRegionSection /></TabsContent>
          <TabsContent value="connections"><ConnectionsSection /></TabsContent>
          <TabsContent value="data"><DataControlSection /></TabsContent>
          <TabsContent value="danger"><DangerZoneSection /></TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
