# Study Flex Prototype

A simple React single-page application (SPA) with login, sign-up, dashboard, settings, and a multi-step input wizard. The app is delivered as a static HTML file and uses React via CDN links.

## Prerequisites
- A modern web browser (Chrome, Firefox, Edge, etc.)
- [Node.js](https://nodejs.org/) 18 or later (needed for the local server or running tests)

## Running the App
You can view the app using either of the following methods:

### Option A: Open the file directly
1. Download or clone this repository.
2. Open `index.html` in your web browser.

### Option B: Run the provided Node.js server
1. Start the server (no install step needed):
   ```bash
   npm start
   ```
2. Open `http://localhost:3000` in your browser.

## Testing
A placeholder test script is included. Run it with:
```bash
npm test
```
This currently prints a message indicating there are no tests.

## Project Structure
- `index.html` – Entry point that loads React from a CDN and attaches the app.
- `app.js` – React components for authentication, dashboard, settings, wizard, and plan views.
- `planner.js` – Demonstrates the planning algorithm pipeline and persists data with `localStorage`.
- `style.css` – Global theme and layout.
- `server.js` – Lightweight Node server for hosting the app.
- `package.json` – Basic metadata plus server and test scripts (no external dependencies).

## Data Persistence
User inputs and generated plans are saved in the browser's `localStorage` so you can revisit and monitor previously entered data.

## Notes
This project is a minimal prototype. For a production-ready React app, consider using a build tool like Vite, CRA, or Next.js.

## Planning Algorithm Overview
The prototype includes a simple algorithm (`planner.js`) that mirrors the backend steps of a future planner service:

1. **User Registration & Authentication** – validates user credentials and issues a session token.
2. **Input Collection** – gathers courses, deadlines, and user preferences.
3. **Backend Data Management** – stores structured tasks and preferences.
4. **Job Orchestration** – triggers plan generation independently of the UI.
5. **AI/ML Models** – estimates study hours and assigns priority scores.
6. **Scheduling Optimizer** – builds a weekly plan from estimates, priorities, and availability.
7. **Plan Storage & Synchronization** – saves the plan and exposes it to the dashboard for display.

On the dashboard, clicking **Generate Plan** runs this pipeline with sample data and opens a dedicated page that lists the generated weekly schedule.
