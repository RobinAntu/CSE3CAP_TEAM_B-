import { j as jsxRuntimeExports, r as reactExports, g as useAppContext } from "./index-CuFUwhe-.js";
import { C as Card } from "./Card-CqNhy3JV.js";
import { I as Input } from "./Input-BjCZdp41.js";
import { B as Button } from "./Button-CSPNikPN.js";
function Switch({ checked, onChange, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: () => onChange(!checked),
      className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${checked ? "bg-blue-600" : "bg-gray-300"} ${className}`,
      "aria-pressed": checked,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${checked ? "translate-x-5" : "translate-x-1"}`
        }
      )
    }
  );
}
function Accordion({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-gray-200", children });
}
function AccordionItem({ title, children, defaultOpen = false, icon }) {
  const [open, setOpen] = reactExports.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: "flex w-full items-center justify-between py-4 text-left",
        onClick: () => setOpen(!open),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: title }),
          icon,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: `h-4 w-4 transform transition-transform ${open ? "rotate-180" : ""}`,
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 9l-7 7-7-7" })
            }
          )
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-4 pt-2 space-y-4", children })
  ] });
}
function Settings() {
  const [email] = reactExports.useState("john.doe@example.com");
  const [pwd, setPwd] = reactExports.useState({ current: "", next: "", confirm: "" });
  const [notify, setNotify] = reactExports.useState(true);
  const { events, setEvents } = useAppContext();
  const clearSessions = () => {
    setEvents(events.filter((e) => !e.title.startsWith("Study: ")));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-semibold", children: "Settings" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionItem, { title: "Account Settings", defaultOpen: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium", children: "Email Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: email, readOnly: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", className: "ml-4", children: "Edit" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium", children: "Change Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "password",
              placeholder: "Current Password",
              value: pwd.current,
              onChange: (e) => setPwd({ ...pwd, current: e.target.value })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "password",
              placeholder: "New Password",
              value: pwd.next,
              onChange: (e) => setPwd({ ...pwd, next: e.target.value })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: "password",
              placeholder: "Confirm New Password",
              value: pwd.confirm,
              onChange: (e) => setPwd({ ...pwd, confirm: e.target.value })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Receive email notifications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: notify, onChange: setNotify })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", className: "w-full mt-2", children: "Update Password" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionItem, { title: "Sync Preferences", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "h-4 w-4" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Google" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "h-4 w-4" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "iCal" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionItem, { title: "Privacy & Data", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Discoverable profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: false, onChange: () => {
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Show online status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked: true, onChange: () => {
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", children: "Download my data" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", onClick: clearSessions, children: "Clear Study Sessions" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-gray-50 p-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "Save Changes" }) })
  ] });
}
export {
  Settings as default
};
//# sourceMappingURL=Settings-D6pXxAUC.js.map
