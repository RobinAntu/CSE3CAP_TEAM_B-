// Select the login form
const loginForm = document.querySelector("form");

// Listen for form submission
loginForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const email = loginForm.querySelector("input[type='email']").value.trim();
    const password = loginForm.querySelector("input[type='password']").value.trim();

    // Validation checks
    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    try {
        // Simulate authentication (replace with API later)
        if (email === "test@student.com" && password === "12345678") {
            alert("Login successful! Redirecting...");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            alert("Invalid email or password. Please try again.");
        }
    } catch (error) {
        console.error("Login error:", error);
        alert("Something went wrong. Please try again later.");
    }
});
