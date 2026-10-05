import React from "react";
import "./Input.css";

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange" | "value"> {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
  hint?: string;
}

export const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  label,
  error,
  hint,
  disabled,
  className = "",
  id,
  children,
  ...props
}) => {
  const selectId = id ?? (label ? `dm-select-${label.replace(/\s+/g, "-")}` : undefined);
  return (
    <div className={`dm-field ${error ? "dm-field--error" : ""} ${className}`.trim()}>
      {label && (
        <label className="dm-field__label" htmlFor={selectId}>
          {label}
        </label>
      )}
      <select
        id={selectId}
        className="dm-field__control"
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      >
        {children}
      </select>
      {error ? (
        <div className="dm-field__error">{error}</div>
      ) : hint ? (
        <div className="dm-field__hint">{hint}</div>
      ) : null}
    </div>
  );
};
