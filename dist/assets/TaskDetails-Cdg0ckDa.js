import { j as jsxRuntimeExports, h as useParams, r as reactExports, L as Link } from "./index-CuFUwhe-.js";
import { g as getFunctions, h as httpsCallable } from "./index.esm-BnAA3k37.js";
import { C as Card } from "./Card-CqNhy3JV.js";
import { B as Button } from "./Button-CSPNikPN.js";
import { C as Checkbox } from "./Checkbox-DLk0g2eR.js";
function Badge({ color = "gray", children, className = "" }) {
  const colors = {
    red: "bg-red-100 text-red-700",
    yellow: "bg-yellow-100 text-yellow-700",
    green: "bg-green-100 text-green-700",
    gray: "bg-gray-100 text-gray-700"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${colors[color]} ${className}`, children });
}
function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = reactExports.useState(null);
  const [suggestions, setSuggestions] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const functions = getFunctions();
        const getAISuggestions = httpsCallable(functions, "getAISuggestions");
        const result = await getAISuggestions({
          prompt: `Give me some suggestions for how to complete the following task: ${id}`
        });
        setSuggestions(result.data.suggestions);
      } catch (error2) {
        setError("Failed to fetch AI suggestions. Please try again later.");
      }
    };
    fetchSuggestions();
  }, [id]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", className: "text-[#2563eb]", children: "‹ Back to Dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold", children: "Complete Research Paper Draft" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Course" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Advanced Data Structures" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Deadline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "May 15, 2024" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Estimated Completion Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "8 hours" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500", children: "Priority Level" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { color: "red", children: "High" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "AI Suggestions for Improvement" }),
        loading && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading AI suggestions..." }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500", children: error }),
        suggestions && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc pl-5 text-sm text-gray-600", children: suggestions.split("\n").map((suggestion, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: suggestion }, index)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/task/edit/${id}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", children: "Edit Task" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, {}),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Mark as Complete" })
        ] })
      ] })
    ] })
  ] });
}
export {
  TaskDetails as default
};
//# sourceMappingURL=TaskDetails-Cdg0ckDa.js.map
