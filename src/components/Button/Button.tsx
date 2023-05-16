import React, { CSSProperties } from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}

const Button = ({
  label,
  onClick,
  className = " ",
  style = {},
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`button-style ${className}`}
      style={{ ...style }}
    >
      {label}
    </button>
  );
};

export default Button;
