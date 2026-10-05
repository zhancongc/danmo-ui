import React from "react";
import "./Button.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  className = "",
  children,
  ...props
}) => (
  <button
    className={`dm-btn dm-btn--${variant} dm-btn--${size} ${className}`.trim()}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <span className="dm-btn__spinner" aria-hidden />}
    {children}
  </button>
);
