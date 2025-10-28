import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link, c as createUserWithEmailAndPassword, b as auth, d as sendEmailVerification } from "./index-CuFUwhe-.js";
import { C as Card } from "./Card-CqNhy3JV.js";
import { I as Input } from "./Input-BjCZdp41.js";
import { B as Button } from "./Button-CSPNikPN.js";
import { C as Checkbox } from "./Checkbox-DLk0g2eR.js";
function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = reactExports.useState({ first: "", last: "", email: "", password: "", agree: false });
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.agree) {
      setError("You must agree to the terms of use and privacy policy.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await sendEmailVerification(userCredential.user);
      alert("Verification email sent! Please check your inbox.");
      navigate("/login");
    } catch (error2) {
      setError(error2.message);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-[#f9fafb] p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "w-full max-w-md space-y-6 p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-center text-2xl font-semibold", children: "Sign up" }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium", children: "First name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: form.first,
              onChange: (e) => setForm({ ...form, first: e.target.value }),
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium", children: "Last name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              value: form.last,
              onChange: (e) => setForm({ ...form, last: e.target.value }),
              required: true
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "email",
            value: form.email,
            onChange: (e) => setForm({ ...form, email: e.target.value }),
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "password",
            value: form.password,
            onChange: (e) => setForm({ ...form, password: e.target.value }),
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            checked: form.agree,
            onChange: (e) => setForm({ ...form, agree: e.target.checked })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "By signing up, I agree with the Terms of Use & Privacy Policy" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full", disabled: loading, children: loading ? "Signing up..." : "Sign up" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm", children: [
      "Already have an account? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-[#2563eb]", children: "Log in" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "flex-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500", children: "OR" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "flex-1" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center space-x-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", className: "rounded-full p-0 h-12 w-12", children: "G" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", className: "rounded-full p-0 h-12 w-12", children: "F" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", className: "rounded-full p-0 h-12 w-12", children: "" })
    ] })
  ] }) });
}
export {
  Signup as default
};
//# sourceMappingURL=Signup-DOpVLy5G.js.map
