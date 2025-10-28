import { j as jsxRuntimeExports, h as useParams, u as useNavigate, r as reactExports, L as Link } from "./index-CuFUwhe-.js";
import { C as Card } from "./Card-CqNhy3JV.js";
import { B as Button } from "./Button-CSPNikPN.js";
import { I as Input } from "./Input-BjCZdp41.js";
function Select({ className = "", children, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "select",
    {
      className: `w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500/40 focus:outline-none ${className}`,
      ...props,
      children
    }
  );
}
function Textarea({ className = "", ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      className: `w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500/40 focus:outline-none ${className}`,
      ...props
    }
  );
}
function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [taskName, setTaskName] = reactExports.useState("Complete Research Paper Draft");
  const [course, setCourse] = reactExports.useState("Advanced Data Structures");
  const [deadline, setDeadline] = reactExports.useState("2024-05-15");
  const [estimatedTime, setEstimatedTime] = reactExports.useState("8");
  const [priority, setPriority] = reactExports.useState("High");
  const [description, setDescription] = reactExports.useState("This is a placeholder description for the research paper draft. It needs to be updated with the actual details of the task.");
  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log("Saving changes for task:", id);
    navigate(`/task/${id}`);
  };
  const handleCancel = () => {
    navigate(`/task/${id}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/task/${id}`, className: "text-[#2563eb]", children: "‹ Back to Task Details" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold mb-4", children: "Edit Task" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSaveChanges, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "taskName", className: "block text-sm font-medium text-gray-700", children: "Task Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "taskName",
              value: taskName,
              onChange: (e) => setTaskName(e.target.value),
              className: "mt-1 block w-full"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "course", className: "block text-sm font-medium text-gray-700", children: "Course" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "course",
              value: course,
              onChange: (e) => setCourse(e.target.value),
              className: "mt-1 block w-full"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "deadline", className: "block text-sm font-medium text-gray-700", children: "Deadline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "date",
              id: "deadline",
              value: deadline,
              onChange: (e) => setDeadline(e.target.value),
              className: "mt-1 block w-full"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "estimatedTime", className: "block text-sm font-medium text-gray-700", children: "Estimated Completion Time (hours)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "number",
              id: "estimatedTime",
              value: estimatedTime,
              onChange: (e) => setEstimatedTime(e.target.value),
              className: "mt-1 block w-full"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "priority", className: "block text-sm font-medium text-gray-700", children: "Priority" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              id: "priority",
              value: priority,
              onChange: (e) => setPriority(e.target.value),
              className: "mt-1 block w-full",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Low" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Medium" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "High" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "description", className: "block text-sm font-medium text-gray-700", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Textarea,
            {
              id: "description",
              value: description,
              onChange: (e) => setDescription(e.target.value),
              className: "mt-1 block w-full",
              rows: "4"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "ghost", onClick: handleCancel, children: "Cancel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", children: "Save Changes" })
        ] })
      ] })
    ] })
  ] });
}
export {
  EditTask as default
};
//# sourceMappingURL=EditTask-CjrXLKvQ.js.map
