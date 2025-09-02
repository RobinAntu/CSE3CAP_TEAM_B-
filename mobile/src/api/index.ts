import { UserProfile, Theme, Language } from '../context/UserContext';

const simulate = async <T,>(data: T): Promise<T> => {
  await new Promise((r) => setTimeout(r, 300));
  if (Math.random() < 0.1) throw new Error('Network error');
  return data;
};

export const getUser = async (): Promise<UserProfile> => simulate({} as UserProfile);
export const updateProfile = async (p: Partial<UserProfile>): Promise<UserProfile> => simulate({} as UserProfile);
export const updatePassword = async (_c: string, _n: string) => simulate(true);
export const toggle2FA = async (e: boolean) => simulate(e);
export const updateNotifications = async (p: Partial<UserProfile>) => simulate(p);
export const updatePrivacy = async (p: Record<string, boolean>) => simulate(p);
export const updateTheme = async (t: Theme) => simulate(t);
export const updateLanguage = async (l: Language) => simulate(l);
export const connectApp = async (p: string) => simulate(p);
export const disconnectApp = async (p: string) => simulate(p);
export const exportData = async () => simulate({});
export const requestDeletion = async (_r: string) => simulate(true);
export const deleteAccount = async () => simulate(true);
