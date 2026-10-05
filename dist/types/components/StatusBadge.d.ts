import React from "react";
import "./StatusBadge.css";
export type BadgeTone = "red" | "green" | "orange" | "gray";
export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    tone?: BadgeTone;
}
export declare const StatusBadge: React.FC<StatusBadgeProps>;
