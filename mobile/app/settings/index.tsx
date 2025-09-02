import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Profile from './Profile';
import Account from './Account';
import Security from './Security';
import Notifications from './Notifications';
import Privacy from './Privacy';
import Appearance from './Appearance';
import LanguageRegion from './LanguageRegion';
import Connections from './Connections';
import DataControls from './DataControls';
import DangerZone from './DangerZone';

const Tab = createMaterialTopTabNavigator();

export default function SettingsTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Security" component={Security} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Privacy" component={Privacy} />
      <Tab.Screen name="Appearance" component={Appearance} />
      <Tab.Screen name="Language" component={LanguageRegion} />
      <Tab.Screen name="Connections" component={Connections} />
      <Tab.Screen name="Data" component={DataControls} />
      <Tab.Screen name="Danger" component={DangerZone} />
    </Tab.Navigator>
  );
}
