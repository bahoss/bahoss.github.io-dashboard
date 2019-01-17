import React, { Component } from "react";
import BlockList from "../BlockList";
import { Wrapper } from "./App.styled";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <BlockList />
      </Wrapper>
    );
  }
}

export default App;
