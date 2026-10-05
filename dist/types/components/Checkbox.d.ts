import React from "react";
import "./Checkbox.css";
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked"> {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: React.ReactNode;
}
export declare const Checkbox: React.FC<CheckboxProps>;
