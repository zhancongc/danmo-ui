import React from "react";
import "./Input.css";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
  hint?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  error,
  hint,
  disabled,
  className = "",
  id,
  ...props
}) => {
  const inputId = id ?? (label ? `dm-input-${label.replace(/\s+/g, "-")}` : undefined);
  return (
    <div className={`dm-field ${error ? "dm-field--error" : ""} ${className}`.trim()}>
      {label && (
        <label className="dm-field__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className="dm-field__control"
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
      {error ? (
        <div className="dm-field__error">{error}</div>
      ) : hint ? (
        <div className="dm-field__hint">{hint}</div>
      ) : null}
    </div>
  );
};
