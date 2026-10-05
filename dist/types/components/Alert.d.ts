import React from "react";
import "./Alert.css";
export type AlertTone = "info" | "success" | "warning" | "danger";
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    tone?: AlertTone;
    children?: React.ReactNode;
}
export declare const Alert: React.FC<AlertProps>;
