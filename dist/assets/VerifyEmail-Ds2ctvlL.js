import { r as reactExports, e as useLocation, u as useNavigate, f as applyActionCode, j as jsxRuntimeExports, b as auth } from "./index-CuFUwhe-.js";
function VerifyEmail() {
  const [message, setMessage] = reactExports.useState("Verifying your email...");
  const location = useLocation();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const actionCode = params.get("oobCode");
    if (actionCode) {
      applyActionCode(auth, actionCode).then(() => {
        setMessage("Email verified successfully! You can now log in.");
        setTimeout(() => {
          navigate("/login");
        }, 3e3);
      }).catch((error) => {
        setMessage(`Error verifying email: ${error.message}`);
      });
    } else {
      setMessage("No action code found. Please check the link and try again.");
    }
  }, [location, navigate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-[#f9fafb] p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-center text-2xl font-semibold", children: message }) }) });
}
export {
  VerifyEmail as default
};
//# sourceMappingURL=VerifyEmail-Ds2ctvlL.js.map
