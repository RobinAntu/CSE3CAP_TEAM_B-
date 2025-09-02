import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

export type Theme = 'system' | 'light' | 'dark';
export type Language = 'en' | 'es' | 'fr' | 'hi' | 'zh' | 'ar';
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  phone?: string;
  timeZone?: string;
  language: Language;
  theme: Theme;
  twoFAEnabled: boolean;
  marketingEmails: boolean;
  productUpdates: boolean;
  pushAlerts: boolean;
  connectedApps: { provider: 'google' | 'github' | 'microsoft'; connected: boolean }[];
}

interface Ctx {
  user: UserProfile | null;
  setUser: (u: UserProfile) => void;
}

const UserContext = createContext<Ctx>({ user: null, setUser: () => {} });

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    (async () => {
      const json = await AsyncStorage.getItem('user');
      if (json) setUser(JSON.parse(json));
    })();
  }, []);

  const persist = async (u: UserProfile) => {
    setUser(u);
    await AsyncStorage.setItem('user', JSON.stringify(u));
    await AsyncStorage.setItem('theme', u.theme);
    await AsyncStorage.setItem('language', u.language);
  };

  return <UserContext.Provider value={{ user, setUser: persist }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
