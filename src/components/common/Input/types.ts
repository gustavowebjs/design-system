import { ChangeEvent } from "react";

export type InputProps = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
};
