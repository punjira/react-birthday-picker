import moment from "moment";
import React, { useState } from "react";
import Picker from "react-birthday-picker";

function App() {
  const [date, setDate] = useState("");
  const handleChange = (date: string | null) => {
    if (date) setDate(date);
  };
  return (
    <div className="App">
      <Picker
        onChange={handleChange}
        placeHolders={["روز", "ماه", "سال"]}
        style={{ width: "200px" }}
      />
      <h2>{moment(date, "YYYY/MM/DD").unix()}</h2>
    </div>
  );
}

export default App;
