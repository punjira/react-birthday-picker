import { HTMLInputTypeAttribute } from "react";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  handleChange: (value: string, name: string) => void;
}
