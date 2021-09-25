import React, { FC, useEffect, useRef, useState } from "react";
import { DatePickerOptions } from "./Picker.types";
import Input from "../components/Input";

import style from "./style.module.css";

const Picker: FC<DatePickerOptions> = ({
  placeHolders = ["day", "month", "year"],
  className = "",
  onChange,
  ...props
}) => {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  useEffect(() => {
    if (day && month && year && onChange) {
      const momentString = `${year}/${month}/${day}`;
      onChange(momentString);
    } else {
      onChange(undefined);
    }
  }, [day, month, year]);
  const handleChange = (value: string, name: string) => {
    switch (name) {
      case "rbday":
        setDay(value);
        if (Number(value) > 3 || value?.length === 2) {
          monthRef.current && monthRef.current.focus();
        }
        break;
      case "rbmonth":
        setMonth(value);
        if (!month && !value) {
          [dayRef.current && dayRef.current.focus()];
        }
        if (Number(value) > 1 || value?.length === 2) {
          yearRef.current && yearRef.current.focus();
        }
        break;
      case "rbyear":
        if (!year && !value) {
          [monthRef.current && monthRef.current.focus()];
        }
        setYear(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className={`${style.container} ${className}`} style={props.style}>
      <div className={style.flexBox}>
        <Input
          ref={dayRef}
          handleChange={handleChange}
          value={day}
          style={props.inputStyle}
          placeholder={placeHolders[0]}
          name={"rbday"}
        />
        <Input
          ref={monthRef}
          handleChange={handleChange}
          value={month}
          style={props.inputStyle}
          placeholder={placeHolders[1]}
          name={"rbmonth"}
        />
        <Input
          ref={yearRef}
          handleChange={handleChange}
          value={year}
          style={props.inputStyle}
          placeholder={placeHolders[2]}
          name={"rbyear"}
        />
      </div>
    </div>
  );
};

export default Picker;
