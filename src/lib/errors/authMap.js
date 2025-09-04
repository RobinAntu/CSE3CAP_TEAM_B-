const M = {
  "auth/invalid-email": "That email looks invalid.",
  "auth/missing-password": "Please enter your password.",
  "auth/weak-password": "Password must be at least 6 characters.",
  "auth/user-not-found": "No account found for that email.",
  "auth/wrong-password": "Incorrect password. Try again.",
  "auth/too-many-requests": "Too many attempts. Please wait a minute and try again.",
  "auth/network-request-failed": "Network error. Check your connection.",
};
export const mapAuthError = (code) => M[code] || "Unable to sign in. Please try again.";

