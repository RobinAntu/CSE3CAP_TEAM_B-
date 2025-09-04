import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  connectAuthEmulator,
} from "firebase/auth";

const cfg = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(cfg);
const auth = getAuth(app);

// Persist sessions across tabs/refresh
setPersistence(auth, browserLocalPersistence);

// Connect to emulator only in dev AND when explicitly enabled
if (import.meta.env.DEV && import.meta.env.VITE_USE_EMULATORS === "true") {
  const host = import.meta.env.VITE_EMU_AUTH || "http://127.0.0.1:9099";
  connectAuthEmulator(auth, host, { disableWarnings: true });
}

export { app, auth };

