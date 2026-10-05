import React from "react";
import "./Loading.css";

export interface LoadingProps {
  size?: "sm" | "md" | "lg";
  /** 居中块级展示（带最小高度），默认仅内联圆圈 */
  block?: boolean;
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({ size = "md", block = false, className = "" }) => (
  <span className={`dm-loading dm-loading--${size} ${block ? "dm-loading--block" : ""} ${className}`.trim()}>
    <span className="dm-loading__spinner" aria-label="加载中" />
  </span>
);
