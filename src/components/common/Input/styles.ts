import { styled } from "@stitches/react";

export const Container = styled("div", {});

export const Input = styled("input", {
  height: "32px",
  padding: "0 8px",
  borderRadius: "4px",
  border: "1px solid #e5e5e5",

  "&:focus": {
    outline: "none",
    border: "1px solid #0078d4",
  },

  "&:disabled": {
    background: "#f4f4f4",
    color: "#a6a6a6",
  },
});
