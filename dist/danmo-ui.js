import { jsxs as o, jsx as m } from "react/jsx-runtime";
import { useEffect as h } from "react";
const v = ({
  variant: a = "primary",
  size: t = "md",
  isLoading: e = !1,
  disabled: d,
  className: l = "",
  children: s,
  ...r
}) => /* @__PURE__ */ o(
  "button",
  {
    className: `dm-btn dm-btn--${a} dm-btn--${t} ${l}`.trim(),
    disabled: d || e,
    ...r,
    children: [
      e && /* @__PURE__ */ m("span", { className: "dm-btn__spinner", "aria-hidden": !0 }),
      s
    ]
  }
), $ = ({
  padding: a = "md",
  className: t = "",
  children: e,
  ...d
}) => /* @__PURE__ */ m("div", { className: `dm-card dm-card--${a} ${t}`.trim(), ...d, children: e }), g = ({
  tone: a = "red",
  className: t = "",
  children: e,
  ...d
}) => /* @__PURE__ */ m("span", { className: `dm-badge dm-badge--${a} ${t}`.trim(), ...d, children: e }), b = ({
  value: a,
  onChange: t,
  label: e,
  error: d,
  hint: l,
  disabled: s,
  className: r = "",
  id: i,
  ...n
}) => {
  const c = i ?? (e ? `dm-input-${e.replace(/\s+/g, "-")}` : void 0);
  return /* @__PURE__ */ o("div", { className: `dm-field ${d ? "dm-field--error" : ""} ${r}`.trim(), children: [
    e && /* @__PURE__ */ m("label", { className: "dm-field__label", htmlFor: c, children: e }),
    /* @__PURE__ */ m(
      "input",
      {
        id: c,
        className: "dm-field__control",
        value: a,
        disabled: s,
        onChange: (u) => t(u.target.value),
        ...n
      }
    ),
    d ? /* @__PURE__ */ m("div", { className: "dm-field__error", children: d }) : l ? /* @__PURE__ */ m("div", { className: "dm-field__hint", children: l }) : null
  ] });
}, k = ({
  value: a,
  onChange: t,
  label: e,
  error: d,
  hint: l,
  disabled: s,
  className: r = "",
  id: i,
  children: n,
  ...c
}) => {
  const u = i ?? (e ? `dm-select-${e.replace(/\s+/g, "-")}` : void 0);
  return /* @__PURE__ */ o("div", { className: `dm-field ${d ? "dm-field--error" : ""} ${r}`.trim(), children: [
    e && /* @__PURE__ */ m("label", { className: "dm-field__label", htmlFor: u, children: e }),
    /* @__PURE__ */ m(
      "select",
      {
        id: u,
        className: "dm-field__control",
        value: a,
        disabled: s,
        onChange: (_) => t(_.target.value),
        ...c,
        children: n
      }
    ),
    d ? /* @__PURE__ */ m("div", { className: "dm-field__error", children: d }) : l ? /* @__PURE__ */ m("div", { className: "dm-field__hint", children: l }) : null
  ] });
}, y = ({
  checked: a,
  onChange: t,
  label: e,
  disabled: d,
  id: l,
  ...s
}) => {
  const r = l ?? (typeof e == "string" ? `dm-check-${e.replace(/\s+/g, "-")}` : void 0);
  return /* @__PURE__ */ o("label", { className: "dm-checkbox", htmlFor: r, children: [
    /* @__PURE__ */ m(
      "input",
      {
        id: r,
        type: "checkbox",
        checked: a,
        disabled: d,
        onChange: (i) => t(i.target.checked),
        ...s
      }
    ),
    e && /* @__PURE__ */ m("span", { className: "dm-checkbox__label", children: e })
  ] });
}, f = { sm: "26rem", md: "34rem", lg: "44rem" }, x = ({
  open: a,
  onClose: t,
  title: e,
  size: d = "md",
  footer: l,
  closeOnOverlayClick: s = !0,
  children: r,
  className: i = ""
}) => (h(() => {
  if (!a) return;
  const n = (c) => {
    c.key === "Escape" && t();
  };
  return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
}, [a, t]), a ? /* @__PURE__ */ m(
  "div",
  {
    className: "dm-modal",
    onMouseDown: (n) => {
      s && n.target === n.currentTarget && t();
    },
    children: /* @__PURE__ */ o(
      "div",
      {
        className: `dm-modal__panel ${i}`.trim(),
        style: { maxWidth: f[d] },
        role: "dialog",
        "aria-modal": "true",
        children: [
          e && /* @__PURE__ */ m("div", { className: "dm-modal__title", children: e }),
          /* @__PURE__ */ m("div", { className: "dm-modal__body", children: r }),
          l && /* @__PURE__ */ m("div", { className: "dm-modal__footer", children: l })
        ]
      }
    )
  }
) : null), E = ({
  message: a,
  tone: t = "info",
  duration: e = 3e3,
  onClose: d
}) => (h(() => {
  if (!e || !d) return;
  const l = setTimeout(d, e);
  return () => clearTimeout(l);
}, [e, d]), a ? /* @__PURE__ */ m("div", { className: `dm-toast dm-toast--${t}`, role: "status", children: a }) : null), I = ({
  tone: a = "info",
  className: t = "",
  children: e,
  ...d
}) => /* @__PURE__ */ m("div", { className: `dm-alert dm-alert--${a} ${t}`.trim(), role: "alert", ...d, children: e }), T = ({ size: a = "md", block: t = !1, className: e = "" }) => /* @__PURE__ */ m("span", { className: `dm-loading dm-loading--${a} ${t ? "dm-loading--block" : ""} ${e}`.trim(), children: /* @__PURE__ */ m("span", { className: "dm-loading__spinner", "aria-label": "加载中" }) });
export {
  I as Alert,
  v as Button,
  $ as Card,
  y as Checkbox,
  b as Input,
  T as Loading,
  x as Modal,
  k as Select,
  g as StatusBadge,
  E as Toast
};
