import React, { useState } from "react";
import DoggoDoggo from "./DoggoDoggo";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <DoggoDoggo
        count={count}
        setCount={setCount}
      />
    </div>
  );
};

export default App;
