import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      selection: ""
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => this.setState({ breeds: Object.keys(data.message) }));
  }

  handleSelection = breed =>
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res => res.json())
      .then(data => this.setState({ selection: data.message }));

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{ height: "500px" }}>
            {this.state.selection ? (
              <img
                src={this.state.selection}
                alt=""
                style={{ width: "auto", height: "100%" }}
              />
            ) : (
              <p>Choose a dog</p>
            )}
          </div>
          <div style={{ display: "inline" }}>
            {this.state.breeds.map((element, i) => (
              <button key={i} onClick={() => this.handleSelection(element)}>
                {element}
              </button>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
