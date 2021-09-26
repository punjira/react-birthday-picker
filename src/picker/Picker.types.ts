import { Moment } from "moment";
import { CSSProperties } from "react";

export interface DatePickerOptions {
  placeHolders?: [string, string, string];
  style?: CSSProperties;
  inputStyle?: CSSProperties;
  className?: string;
  onChange?: (value: string | null) => void;
  value?: [string, string, string];
}
