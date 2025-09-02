import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme } from '../context/UserContext';

export const applyTheme = async (theme: Theme) => {
  await AsyncStorage.setItem('theme', theme);
  // In a real app, integrate with a theme provider
};

export const getInitialTheme = async (): Promise<Theme> => {
  const stored = await AsyncStorage.getItem('theme');
  return (stored as Theme) || (Appearance.getColorScheme() as Theme) || 'light';
};
