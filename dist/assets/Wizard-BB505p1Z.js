import { r as reactExports, g as useAppContext, j as jsxRuntimeExports } from "./index-CuFUwhe-.js";
import { h as httpsCallable, g as getFunctions } from "./index.esm-BnAA3k37.js";
const Wizard = () => {
  const [prompt, setPrompt] = reactExports.useState("");
  const [response, setResponse] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const { addSubject, addAssessment, addFixedSlot, addTask, addStudySession } = useAppContext();
  const getAISuggestions = httpsCallable(getFunctions(), "getAISuggestions");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await getAISuggestions({ prompt });
      const data = result.data;
      if (data.tool === "create_subject") {
        addSubject(data.arguments);
        setResponse(`A new subject, ${data.arguments.course_code}: ${data.arguments.title}, has been added to your schedule.`);
      } else if (data.tool === "add_assessment_to_subject") {
        addAssessment(data.arguments.course_code, data.arguments);
        setResponse(`A new assessment, ${data.arguments.title}, has been added to ${data.arguments.course_code}.`);
      } else if (data.tool === "add_fixed_slot_to_subject") {
        addFixedSlot(data.arguments.course_code, data.arguments);
        setResponse(`A new ${data.arguments.type} has been added to ${data.arguments.course_code} on ${data.arguments.day} from ${data.arguments.start_time} to ${data.arguments.end_time}.`);
      } else if (data.tool === "create_task") {
        addTask(data.arguments);
        setResponse(`A new task, ${data.arguments.title}, has been created for ${data.arguments.course_code}.`);
      } else if (data.tool === "add_task_to_subject") {
        addTask(data.arguments);
        setResponse(`A new task, ${data.arguments.title}, has been added to ${data.arguments.course_code}.`);
      } else if (data.tool === "create_study_session") {
        addStudySession(data.arguments);
        const { start_time, end_time, task_title } = data.arguments;
        const startDate = new Date(start_time);
        const endDate = new Date(end_time);
        setResponse(`A new study session for '${task_title}' has been scheduled on ${startDate.toLocaleDateString()} from ${startDate.toLocaleTimeString()} to ${endDate.toLocaleTimeString()}.`);
      } else {
        const suggestions = data.suggestions;
        if (prompt.toLowerCase().includes("add subject") && suggestions && typeof suggestions === "string") {
          const parts = suggestions.split(":");
          if (parts.length > 1) {
            const course_code = parts[0].trim();
            const rest = parts.slice(1).join(":");
            const titleMatch = rest.match(/^\s*([^\-–—]+)/);
            if (titleMatch) {
              const title = titleMatch[1].trim();
              addSubject({ course_code, title });
              setResponse(`A new subject, ${course_code}: ${title}, has been added to your schedule.`);
            } else {
              setResponse(suggestions);
            }
          } else {
            setResponse(suggestions);
          }
        } else {
          setResponse(suggestions);
        }
      }
    } catch (error) {
      console.error("Error fetching AI suggestions:", error);
      setResponse("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold mb-4", children: "AI Wizard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          className: "w-full p-2 border rounded",
          rows: "5",
          value: prompt,
          onChange: (e) => setPrompt(e.target.value),
          placeholder: "Enter your prompt here..."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "submit",
          className: "mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
          disabled: loading,
          children: loading ? "Loading..." : "Get Feedback"
        }
      )
    ] }),
    response && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 p-4 border rounded bg-gray-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "AI Feedback:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: response })
    ] })
  ] });
};
export {
  Wizard as default
};
//# sourceMappingURL=Wizard-BB505p1Z.js.map
