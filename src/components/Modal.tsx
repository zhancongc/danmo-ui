import React, { useEffect } from "react";
import "./Modal.css";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  footer?: React.ReactNode;
  closeOnOverlayClick?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const sizeMap = { sm: "26rem", md: "34rem", lg: "44rem" } as const;

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  size = "md",
  footer,
  closeOnOverlayClick = true,
  children,
  className = "",
}) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="dm-modal"
      onMouseDown={(e) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`dm-modal__panel ${className}`.trim()}
        style={{ maxWidth: sizeMap[size] }}
        role="dialog"
        aria-modal="true"
      >
        {title && <div className="dm-modal__title">{title}</div>}
        <div className="dm-modal__body">{children}</div>
        {footer && <div className="dm-modal__footer">{footer}</div>}
      </div>
    </div>
  );
};
