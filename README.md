# Study Flex Prototype

A simple React single-page application (SPA) with login, sign-up, dashboard, settings, and a multi-step input wizard. The app is delivered as a static HTML file and uses React via CDN links.

## Prerequisites
- A modern web browser (Chrome, Firefox, Edge, etc.)
- [Node.js](https://nodejs.org/) 18 or later (optional; needed only for running the test script or serving files locally)

## Running the App
You can view the app using either of the following methods:

### Option A: Open the file directly
1. Download or clone this repository.
2. Open `index.html` in your web browser.

### Option B: Serve with Node.js
1. Install dependencies (none are required, but this ensures `npm` is set up):
   ```bash
   npm install
   ```
2. Start a simple static server (using `npx` which comes with Node.js):
   ```bash
   npx serve .
   ```
3. Open the URL printed in the terminal (e.g., http://localhost:3000) in your browser.

## Testing
A placeholder test script is included. Run it with:
```bash
npm test
```
This currently prints a message indicating there are no tests.

## Project Structure
- `index.html` – Contains the entire React SPA using inline scripts.
- `planner.js` – Demonstrates the planning algorithm pipeline.
- `package.json` – Basic metadata and placeholder scripts.
- `style.css` – Global theme styles.

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

On the dashboard, clicking **Generate Plan** runs this pipeline with sample data and renders the resulting weekly schedule.
