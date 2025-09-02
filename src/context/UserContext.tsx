import React, { createContext, useContext, useState, useEffect } from 'react';

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

interface UserContextValue {
  user: UserProfile;
  setUser: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const defaultUser: UserProfile = {
  id: '1',
  name: 'Student',
  email: 'student@example.com',
  language: (localStorage.getItem('language') as Language) || 'en',
  theme: (localStorage.getItem('theme') as Theme) || 'system',
  twoFAEnabled: false,
  marketingEmails: true,
  productUpdates: true,
  pushAlerts: true,
  connectedApps: [
    { provider: 'google', connected: false },
    { provider: 'github', connected: false },
    { provider: 'microsoft', connected: false },
  ],
};

const UserContext = createContext<UserContextValue>({ user: defaultUser, setUser: () => {} });

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile>(defaultUser);

  useEffect(() => {
    localStorage.setItem('theme', user.theme);
    localStorage.setItem('language', user.language);
    document.documentElement.classList.remove('light', 'dark');
    if (user.theme !== 'system') {
      document.documentElement.classList.add(user.theme);
    }
  }, [user.theme, user.language]);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
