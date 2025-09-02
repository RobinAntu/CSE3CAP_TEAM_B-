import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import SettingsPage from './components/settings/SettingsPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/settings" element={<SettingsPage />} />
    <Route path="*" element={<div className="p-4">Home</div>} />
  </Switch>
);

export default Routes;
