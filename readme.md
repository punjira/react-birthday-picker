# React Birthday picker

A less annoying birthday picker

## Installing

```
npm install react-birthday-picker
```

## Usage

import the library

```js
import { BirthdayPicker } from "react-birthday-picker";
```

use in your components

```jsx
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
        placeHolders={["doy", "month", "yor"]}
        style={{ width: "200px" }}
      />
      <h2>{moment(date, "YYYY/MM/DD").unix()}</h2>
    </div>
  );
}
```

notice how `react-birthday-picker` doesn't concern itself with parsing and formatting date.
`onChange` callback function will return a string with `YYYY/MM/DD` format that you can use with `momentjs`.

## Styling

Pass your style as `style` props and `inputStyle` prop.
you can also choose to pass your own `className` prop to component and apply class stylings.

## Contribution

Commits are protected by [husky](https://typicode.github.io/husky/#/). By default you can't commit on master and dev (long living branches) branches.  
Create a new branch prefixing it with `feature/`, `issue/`, `hotfix/`, etc and merge it to dev branch and create a PR.

## Tests

run

```
npm test
```

and

```
npm run test:watch
```

to run the test.
