
import { describe, it, expect, vi } from 'vitest';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

vi.mock('firebase/app', () => ({
  initializeApp: vi.fn(() => {
    return { name: '[DEFAULT]' };
  }),
}));

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(() => {
    return { currentUser: null };
  }),
}));

vi.mock('firebase/analytics', () => ({
  getAnalytics: vi.fn(() => {
    return { logEvent: () => {} };
  }),
}));

describe('Firebase Initialization', () => {
  it('should initialize firebase with the correct config', async () => {
    const firebaseConfig = {
      apiKey: 'AIzaSyB2X3THVraoQUaMsdtVwUvF-DnoLaG4kXM',
      authDomain: 'cse3cap-team-b.firebaseapp.com',
      projectId: 'cse3cap-team-b',
      storageBucket: 'cse3cap-team-b.firebasestorage.app',
      messagingSenderId: '1071871267605',
      appId: '1:1071871267605:web:ac06f8b24199c1bf4c8f1c',
      measurementId: 'G-6Q60VEX9WT',
    };

    // Dynamically import the module to ensure it runs with the mocks
    await import('./firebase.js');

    expect(initializeApp).toHaveBeenCalledWith(firebaseConfig);
  });

  it('should get and export auth', async () => {
    const mockApp = { name: '[DEFAULT]' };
    initializeApp.mockReturnValue(mockApp);

    const mockAuth = { currentUser: { uid: '123' } };
    getAuth.mockReturnValue(mockAuth);

    const { auth } = await import('./firebase.js');

    expect(getAuth).toHaveBeenCalledWith(mockApp);
    expect(auth).toEqual(mockAuth);
  });

  it('should get analytics', async () => {
    const mockApp = { name: '[DEFAULT]' };
    initializeApp.mockReturnValue(mockApp);

    const mockAnalytics = { logEvent: () => {} };
    getAnalytics.mockReturnValue(mockAnalytics);

    await import('./firebase.js');

    expect(getAnalytics).toHaveBeenCalledWith(mockApp);
  });
});
