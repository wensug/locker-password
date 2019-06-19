import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      password: []
    };
  }

  handleButton() {
    fetch("/rest/locker-combination")
      .then(response => response.json())
      .then(data => this.setState({ password: data.password }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>5-digit locker combination</h2>
        </header>
        <button className="button" onClick={() => this.handleButton()}>
          Show my password
        </button>
        <label>{this.state.password}</label>
      </div>
    );
  }
}

export default App;
