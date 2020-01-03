import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [selection, setSelection] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => setBreeds(Object.keys(data.message)));
  });

  const handleSelection = breed =>
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => res.json())
      .then(data => setSelection(data.message));

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ height: "500px" }}>
          {selection ? (
            <img
              src={selection}
              alt=""
              style={{ width: "auto", height: "100%" }}
            />
          ) : (
            <p>Choose a dog</p>
          )}
        </div>
        {React.Children.map(breeds, element => (
          <button style={{ display: "inline" }} onClick={() => handleSelection(element)}>{element}</button>
        ))}
      </header>
    </div>
  );
};

export default App;
