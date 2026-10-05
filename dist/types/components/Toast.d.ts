import React from "react";
import "./Toast.css";
export type ToastTone = "info" | "success" | "error";
export interface ToastProps {
    message: React.ReactNode;
    tone?: ToastTone;
    /** 自动关闭毫秒数，0 表示不自动关闭；默认 3000 */
    duration?: number;
    onClose?: () => void;
}
export declare const Toast: React.FC<ToastProps>;
