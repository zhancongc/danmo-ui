import React from "react";
import "./Checkbox.css";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked"> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  disabled,
  id,
  ...props
}) => {
  const inputId = id ?? (typeof label === "string" ? `dm-check-${label.replace(/\s+/g, "-")}` : undefined);
  return (
    <label className="dm-checkbox" htmlFor={inputId}>
      <input
        id={inputId}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        {...props}
      />
      {label && <span className="dm-checkbox__label">{label}</span>}
    </label>
  );
};
