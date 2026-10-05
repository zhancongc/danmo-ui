import React from "react";
import "./Input.css";
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value"> {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    error?: string;
    hint?: string;
}
export declare const Input: React.FC<InputProps>;
