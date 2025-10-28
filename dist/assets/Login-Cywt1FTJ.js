import { r as reactExports, u as useNavigate, a as useAuth, j as jsxRuntimeExports, L as Link, s as signInWithEmailAndPassword, b as auth } from "./index-CuFUwhe-.js";
function Login() {
  const [form, setForm] = reactExports.useState({ email: "", password: "" });
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleForm = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      if (!userCredential.user.emailVerified) {
        setError("Please verify your email before logging in.");
        return;
      }
      login(userCredential.user);
      navigate("/dashboard");
    } catch (error2) {
      setError(error2.message);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center justify-center h-screen bg-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md p-8 bg-white rounded-lg shadow-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-center text-gray-800 mb-6", children: "Login to Your Account" }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-center mb-4", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "block text-gray-700", children: "Email Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            name: "email",
            id: "email",
            className: "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
            required: true,
            value: form.email,
            onChange: handleForm
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "password", className: "block text-gray-700", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "password",
            name: "password",
            id: "password",
            className: "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
            required: true,
            value: form.password,
            onChange: handleForm
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          disabled: loading,
          children: loading ? "Logging in..." : "Login"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-center text-gray-600", children: [
      "Don't have an account?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", className: "text-blue-700 underline", children: "Sign up" })
    ] })
  ] }) });
}
export {
  Login as default
};
//# sourceMappingURL=Login-Cywt1FTJ.js.map
