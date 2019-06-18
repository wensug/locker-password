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
  fetch('/rest/lockercombination')
      .then(response => response.json())
      .then(data => this.setState({ password: data.password }))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>5-digit locker combination</p>
        </header>
        <button className="button" onClick={() => this.handleButton()}>
					Show my Password
				</button>
        <label>{this.state.password}</label>
      </div>
    );
  }
}

export default App;
