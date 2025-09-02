# Study Flex Prototype

This repository now contains a web app built with React 18, TypeScript, Vite, Tailwind CSS, and shadcn/ui plus a matching React Native (Expo) settings suite. Both showcase a comprehensive settings experience with profile management, security controls, notifications, appearance, language, connections, data export, and account deletion flows.

## Web App

### Prerequisites
- Node.js 18+

### Development
```bash
npm install
npm run dev
```
Visit `http://localhost:5173/settings` to open the settings page.

### Tests
```bash
npm test
```
(Currently prints a placeholder message.)

## React Native App

The `mobile/` directory contains Expo screens. Use Expo to run:
```bash
cd mobile
expo start
```

## Project Structure
- `index.html`, `src/` – Vite web app entry and sources
- `mobile/app/` – Expo navigation and settings screens
- `mobile/src/` – shared context, mock API, validators, and theme helpers for mobile

## Notes
The mock APIs simulate latency and 10% failure rates. Theme and language preferences persist via localStorage on web and AsyncStorage on mobile.
