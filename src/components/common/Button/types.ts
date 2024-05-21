import React from "react";

export type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};
