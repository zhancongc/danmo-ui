import React from "react";
import "./Card.css";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    padding?: "none" | "sm" | "md";
}
export declare const Card: React.FC<CardProps>;
