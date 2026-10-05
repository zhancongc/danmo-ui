import React from "react";
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
export declare const Modal: React.FC<ModalProps>;
