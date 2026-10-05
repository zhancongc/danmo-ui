import React from "react";
import "./Card.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "sm" | "md";
}

export const Card: React.FC<CardProps> = ({
  padding = "md",
  className = "",
  children,
  ...props
}) => (
  <div className={`dm-card dm-card--${padding} ${className}`.trim()} {...props}>
    {children}
  </div>
);
