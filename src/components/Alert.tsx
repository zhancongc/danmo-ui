import React from "react";
import "./Alert.css";

export type AlertTone = "info" | "success" | "warning" | "danger";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: AlertTone;
  children?: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  tone = "info",
  className = "",
  children,
  ...props
}) => (
  <div className={`dm-alert dm-alert--${tone} ${className}`.trim()} role="alert" {...props}>
    {children}
  </div>
);
