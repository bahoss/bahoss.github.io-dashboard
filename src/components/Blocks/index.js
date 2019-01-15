import React, { Component } from "react";
import { Block, Span } from "./Block.styled";
import { Alert } from "antd";
import AddComment from "../AddComment";
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
        <Span>{this.handleCheckStatus()}</Span>
        <Span>{this.props.res.last_check}</Span>
        <AddComment comment={this.props.res.comment} id={this.props.res.id} />
      </Block>
    );
  }
}

export default Blocks;
