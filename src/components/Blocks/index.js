import React, { Component } from "react";
import { Block, Span } from "./Block.styled";

class Blocks extends Component {
  render() {
    return (
      <Block>
        <Span>{this.props.res.id}</Span>
        <Span>{this.props.res.title}</Span>
        <Span>{this.props.res.type}</Span>
        <Span>{this.props.res.comment}</Span>
        <Span>{this.props.res.result}</Span>
        <Span>{this.props.res.last_check}</Span>
      </Block>
    );
  }
}

export default Blocks;
