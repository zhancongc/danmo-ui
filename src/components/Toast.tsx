import React, { useEffect } from "react";
import "./Toast.css";

export type ToastTone = "info" | "success" | "error";

export interface ToastProps {
  message: React.ReactNode;
  tone?: ToastTone;
  /** 自动关闭毫秒数，0 表示不自动关闭；默认 3000 */
  duration?: number;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  tone = "info",
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    if (!duration || !onClose) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);

  if (!message) return null;
  return (
    <div className={`dm-toast dm-toast--${tone}`} role="status">
      {message}
    </div>
  );
};
