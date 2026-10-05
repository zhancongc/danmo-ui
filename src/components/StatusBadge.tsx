import React from "react";
import "./StatusBadge.css";

export type BadgeTone = "red" | "green" | "orange" | "gray";

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  tone = "red",
  className = "",
  children,
  ...props
}) => (
  <span className={`dm-badge dm-badge--${tone} ${className}`.trim()} {...props}>
    {children}
  </span>
);
