import { UserProfile, Theme, Language } from '../context/UserContext';

const simulate = async <T,>(data: T): Promise<T> => {
  await new Promise((r) => setTimeout(r, 300));
  if (Math.random() < 0.1) throw new Error('Network error');
  return data;
};

export const getUser = async (): Promise<UserProfile> => {
  return simulate(JSON.parse(localStorage.getItem('user') || 'null') || null);
};

export const updateProfile = async (profile: Partial<UserProfile>): Promise<UserProfile> => {
  const stored = JSON.parse(localStorage.getItem('user') || '{}');
  const updated = { ...stored, ...profile };
  localStorage.setItem('user', JSON.stringify(updated));
  return simulate(updated);
};

export const updatePassword = async (_current: string, _next: string): Promise<true> => {
  return simulate(true);
};

export const toggle2FA = async (enable: boolean): Promise<boolean> => {
  const stored = JSON.parse(localStorage.getItem('user') || '{}');
  stored.twoFAEnabled = enable;
  localStorage.setItem('user', JSON.stringify(stored));
  return simulate(enable);
};

export const updateNotifications = async (prefs: Partial<UserProfile>): Promise<Partial<UserProfile>> => {
  const stored = JSON.parse(localStorage.getItem('user') || '{}');
  const updated = { ...stored, ...prefs };
  localStorage.setItem('user', JSON.stringify(updated));
  return simulate(updated);
};

export const updatePrivacy = async (prefs: Record<string, boolean>): Promise<Record<string, boolean>> => {
  return simulate(prefs);
};

export const updateTheme = async (theme: Theme): Promise<Theme> => simulate(theme);

export const updateLanguage = async (language: Language): Promise<Language> => simulate(language);

export const connectApp = async (provider: string): Promise<string> => simulate(provider);

export const disconnectApp = async (provider: string): Promise<string> => simulate(provider);

export const exportData = async (): Promise<Blob> => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return simulate(new Blob([JSON.stringify(user)], { type: 'application/json' }));
};

export const requestDeletion = async (_reason: string): Promise<boolean> => simulate(true);

export const deleteAccount = async (): Promise<boolean> => simulate(true);
