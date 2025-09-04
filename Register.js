/* Register.js — client-side validation + mock persistence (localStorage)
   Field requirements:
   - First Name, Last Name: letters & spaces only (no numbers)
   - Email: valid format AND unique (not already registered)
   - Password: 9–11 characters, letters & numbers only (no special chars)
   - Confirm Password: must match Password exactly
*/

(function () {
  // ---------- Helpers ----------
  const $ = (sel, ctx = document) => ctx.querySelector(sel);

  // Create or reuse a small <p> element beneath an input for inline errors
  function getErrorNode(inputEl) {
    let node = inputEl.parentElement.querySelector("[data-error-for]");
    if (!node) {
      node = document.createElement("p");
      node.setAttribute("data-error-for", inputEl.id || inputEl.name || "field");
      node.className = "mt-1 text-sm text-red-600"; // Tailwind
      inputEl.parentElement.appendChild(node);
    }
    return node;
  }

  function showError(inputEl, message) {
    const node = getErrorNode(inputEl);
    node.textContent = message || "";
    inputEl.setAttribute("aria-invalid", message ? "true" : "false");
    if (message) {
      inputEl.classList.add("border-red-500", "focus:ring-red-500", "focus:border-red-500");
    } else {
      inputEl.classList.remove("border-red-500", "focus:ring-red-500", "focus:border-red-500");
    }
  }

  function clearAllErrors(form) {
    form.querySelectorAll("[data-error-for]").forEach(p => (p.textContent = ""));
    form.querySelectorAll("input").forEach(el => el.setAttribute("aria-invalid", "false"));
  }

  // ---------- Storage (mock user DB) ----------
  const USERS_KEY = "sf_users"; // [{ firstName, lastName, email, passwordHash }]
  function loadUsers() {
    try {
      const raw = localStorage.getItem(USERS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
  function emailExists(email) {
    const users = loadUsers();
    return users.some(u => (u.email || "").toLowerCase() === email.toLowerCase());
  }

  // NOTE: simple hash placeholder to avoid storing plain text (not secure; replace with backend)
  function fauxHash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i), h |= 0;
    return String(h);
  }

  // ---------- Validation rules ----------
  const nameRegex = /^[A-Za-z ]+$/; // letters & spaces only
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // basic email
  const passwordRegex = /^[A-Za-z0-9]{9,11}$/; // 9–11, alphanumeric only

  function validateFirstName(value, inputEl) {
    const v = value.trim();
    if (!v) return showError(inputEl, "First name is required.");
    if (!nameRegex.test(v)) return showError(inputEl, "First name can only contain letters and spaces.");
    return showError(inputEl, "");
  }

  function validateLastName(value, inputEl) {
    const v = value.trim();
    if (!v) return showError(inputEl, "Last name is required.");
    if (!nameRegex.test(v)) return showError(inputEl, "Last name can only contain letters and spaces.");
    return showError(inputEl, "");
  }

  function validateEmail(value, inputEl) {
    const v = value.trim();
    if (!v) return showError(inputEl, "Email is required.");
    if (!emailRegex.test(v)) return showError(inputEl, "Please enter a valid email address.");
    if (emailExists(v)) return showError(inputEl, "This email is already registered. Please try another one.");
    return showError(inputEl, "");
  }

  function validatePassword(value, inputEl) {
    const v = value;
    if (!v) return showError(inputEl, "Password is required.");
    if (!passwordRegex.test(v)) {
      return showError(
        inputEl,
        "Password must be 9–11 characters, letters and numbers only (no special characters)."
      );
    }
    return showError(inputEl, "");
  }

  function validateConfirmPassword(password, confirm, inputEl) {
    if (!confirm) return showError(inputEl, "Please re-enter your password to confirm.");
    if (password !== confirm) return showError(inputEl, "Passwords do not match. Please re-enter to confirm.");
    return showError(inputEl, "");
  }

  // ---------- Wire up form ----------
  const form = document.getElementById("registerForm");
  if (!form) return; // quietly exit if the page doesn’t have the form

  const firstNameEl = $("#firstName", form);
  const lastNameEl = $("#lastName", form);
  const emailEl = $("#email", form);
  const passwordEl = $("#password", form);
  const confirmEl = $("#confirmPassword", form);

  // Real-time validation
  firstNameEl.addEventListener("input", () => validateFirstName(firstNameEl.value, firstNameEl));
  lastNameEl.addEventListener("input", () => validateLastName(lastNameEl.value, lastNameEl));
  emailEl.addEventListener("input", () => validateEmail(emailEl.value, emailEl));
  passwordEl.addEventListener("input", () => {
    validatePassword(passwordEl.value, passwordEl);
    validateConfirmPassword(passwordEl.value, confirmEl.value, confirmEl);
  });
  confirmEl.addEventListener("input", () => validateConfirmPassword(passwordEl.value, confirmEl.value, confirmEl));

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Run all validators
    validateFirstName(firstNameEl.value, firstNameEl);
    validateLastName(lastNameEl.value, lastNameEl);
    validateEmail(emailEl.value, emailEl);
    validatePassword(passwordEl.value, passwordEl);
    validateConfirmPassword(passwordEl.value, confirmEl.value, confirmEl);

    // If any field has aria-invalid="true", block submit
    const hasError = Array.from(form.querySelectorAll("input")).some(el => el.getAttribute("aria-invalid") === "true");
    if (hasError) return;

    // Save user (mock). Replace with API call to your Node.js backend later.
    const users = loadUsers();
    users.push({
      firstName: firstNameEl.value.trim(),
      lastName: lastNameEl.value.trim(),
      email: emailEl.value.trim(),
      passwordHash: fauxHash(passwordEl.value) // do NOT use client-side hashing in production
    });
    saveUsers(users);

    // Success UI
    clearAllErrors(form);
    alert("Registration successful! You can now log in.");
    window.location.href = "login.html"; // redirect to login page
  });
})();
