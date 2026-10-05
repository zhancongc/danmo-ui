import React from "react";
import "./Input.css";
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange" | "value"> {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    error?: string;
    hint?: string;
}
export declare const Select: React.FC<SelectProps>;
