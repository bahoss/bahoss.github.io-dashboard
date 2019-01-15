import React, { Component } from "react";
import { Block, Span } from "./Block.styled";
import { Alert } from "antd";
import "antd/dist/antd.css";

class Blocks extends Component {
  handleCheckStatus = () => {
    if (
      this.props.res.type === "website" &&
      typeof this.props.res.result === "string"
    ) {
      return <Alert type="error" message={this.props.res.result} banner />;
    } else if (
      (this.props.res.type === "website" || this.props.res.type === "other") &&
      this.props.res.result === true
    ) {
      return <Alert type="success" message="ON" banner />;
    } else {
      return <Alert type="error" message="OFF" banner />;
    }
  };
  render() {
    return (
      <Block>
        <Span>{this.props.res.title}</Span>
        <Span>{this.props.res.type}</Span>
        <Span>{this.props.res.comment}</Span>
        <Span>{this.handleCheckStatus()}</Span>
        <Span>{this.props.res.last_check}</Span>
      </Block>
    );
  }
}

export default Blocks;
