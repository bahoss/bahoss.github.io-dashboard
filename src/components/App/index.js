import React, { Component } from "react";
import Router from "../Router";
import { Wrapper } from "./App.styled";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Router />
      </Wrapper>
    );
  }
}

export default App;
