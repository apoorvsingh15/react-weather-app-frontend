import React, { Component } from "react";
import "./App.css";
import Main from "./containers/index";
class App extends Component {
  render() {
    return (
      <div>
        <Main dummy={10} />
      </div>
    );
  }
}

export default App;
