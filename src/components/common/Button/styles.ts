import { styled } from "@stitches/react";

export const Container = styled("div", {});

export const Button = styled("button", {
  backgroundColor: "transparent",
  border: "1px solid #0078D4",
  borderRadius: "4px",
  color: "#0078D4",
  cursor: "pointer",
  display: "inline-block",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "20px",
  padding: "8px 16px",
  textAlign: "center",
  textDecoration: "none",
  userSelect: "none",
  verticalAlign: "middle",
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: "#F3F2F1",
  },
  "&:focus": {
    outline: "none",
  },
  "&:active": {
    backgroundColor: "#EDEBE9",
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "#0078D4",
        color: "#FFFFFF",
        "&:hover": {
          backgroundColor: "#005A9E",
        },
        "&:active": {
          backgroundColor: "#004578",
        },
      },
      secondary: {
        backgroundColor: "#FFFFFF",
        border: "1px solid #0078D4",
        color: "#0078D4",
        "&:hover": {
          backgroundColor: "#F3F2F1",
        },
        "&:active": {
          backgroundColor: "#EDEBE9",
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
