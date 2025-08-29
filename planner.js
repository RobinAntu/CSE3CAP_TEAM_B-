// planner.js - Logic for generating and managing study plans
class StudyPlanner {
    constructor() {
        this.courses = [];
        this.goals = [];
        this.preferences = {};
    }

    addCourse(courseName, credits, midtermDeadline, finalDeadline) {
        this.courses.push({ courseName, credits, midtermDeadline, finalDeadline });
    }

    setGoals(goals) {
        this.goals = goals.split('\n').filter(goal => goal.trim() !== '');
    }

    setPreferences(times, sessionLength, dailyHours, learningStyle, aiAlerts) {
        this.preferences = { times, sessionLength, dailyHours, learningStyle, aiAlerts };
    }

    generatePlan() {
        // Simple plan generation logic
        const plan = {
            weeklySchedule: {},
            totalHours: this.preferences.dailyHours * 7
        };
        this.courses.forEach(course => {
            plan.weeklySchedule[course.courseName] = {
                tasks: [`Midterm: ${course.midtermDeadline}`, `Final: ${course.finalDeadline}`],
                credits: course.credits
            };
        });
        return plan;
    }
}

// Example usage
const planner = new StudyPlanner();
planner.addCourse("Introduction to Algorithms", 3, "2025-09-15", "2025-12-01");
planner.setGoals("Master Python for data analysis\nImprove problem-solving skills");
planner.setPreferences(["Morning"], 60, 4, "Visual", true);
console.log(planner.generatePlan());
