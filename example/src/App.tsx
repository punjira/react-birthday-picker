import moment from "moment";
import React, { useState } from "react";
import { BirthdayPicker } from "react-birthday-picker";

function App() {
  const [date, setDate] = useState("");
  const handleChange = (date: string | null) => {
    if (date) setDate(date);
  };
  return (
    <div className="App">
      <BirthdayPicker
        onChange={handleChange}
        placeHolders={["روز", "ماه", "سال"]}
        style={{ width: "200px" }}
      />
      <h2>{moment(date, "YYYY/MM/DD").unix()}</h2>
      <label>controlled inputs</label>
      <br />
      <BirthdayPicker
        onChange={handleChange}
        placeHolders={["day", "month", "year"]}
        style={{ width: "200px" }}
        value={["11", "3", "1374"]}
      />
    </div>
  );
}

export default App;
