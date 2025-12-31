import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Event Handling</h1>
      <p>Button clicked: {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
