import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log('i run all the time')
  useEffect(() => {
    console.log("Call the API...")
  }, [])

  return (
    <div>
      <h1>{counter}</h1>
      <button  onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
 