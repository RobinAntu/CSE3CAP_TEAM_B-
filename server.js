// server.js - Enhanced server setup for Study Flex application

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// In-memory data storage (for demonstration; use a real database in production)
let users = []; // Array to store user data
let schedules = {}; // Object to store user schedules

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Signup endpoint
app.post('/signup', (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
    }
    users.push({ firstName, lastName, email, password }); // Store plain password for demo; hash in production
    res.status(201).json({ message: 'User created successfully' });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.json({ message: 'Login successful', user: { email: user.email } }); // Return user info; use JWT in production
});

// Get dashboard data (weekly overview)
app.get('/dashboard', (req, res) => {
    // Sample data; replace with real user-specific data
    const weeklyOverview = {
        Mon: [{ task: 'Submit Mar', course: 'BUSN 301', color: 'red' }],
        Tue: [{ task: 'Attend Lab', course: 'CHEM 101', color: 'green' }],
        // Add more days...
    };
    res.json(weeklyOverview);
});

// Update settings (e.g., change password)
app.post('/settings/update-password', (req, res) => {
    const { email, currentPassword, newPassword } = req.body;
    const userIndex = users.findIndex(user => user.email === email && user.password === currentPassword);
    if (userIndex === -1) {
        return res.status(401).json({ message: 'Invalid current password' });
    }
    users[userIndex].password = newPassword;
    res.json({ message: 'Password updated successfully' });
});

// Input wizard - Save course details
app.post('/input-wizard/course', (req, res) => {
    const { email, courseName, credits, midtermDeadline, finalDeadline } = req.body;
    if (!schedules[email]) {
        schedules[email] = [];
    }
    schedules[email].push({ courseName, credits, midtermDeadline, finalDeadline });
    res.json({ message: 'Course added successfully' });
});

// Generate schedule (using planner.js logic)
app.post('/generate-schedule', (req, res) => {
    const { email, goals, preferences } = req.body;
    // Integrate with planner.js
    const planner = require('./planner'); // Assuming planner.js is in the same directory
    const userPlanner = new planner.StudyPlanner();
    if (schedules[email]) {
        schedules[email].forEach(course => {
            userPlanner.addCourse(course.courseName, course.credits, course.midtermDeadline, course.finalDeadline);
        });
    }
    userPlanner.setGoals(goals);
    userPlanner.setPreferences(preferences.times, preferences.sessionLength, preferences.dailyHours, preferences.learningStyle, preferences.aiAlerts);
    const plan = userPlanner.generatePlan();
    res.json(plan);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
