import React, { Component } from "react";
import { Wrapper, Span, LastCheck } from "./Block.styled";
import { Alert } from "antd";
import Comments from "../Comments";
import "antd/dist/antd.css";

class Block extends Component {
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
      <Wrapper>
        <Span>{this.props.res.title}</Span>
        <Span>{this.handleCheckStatus()}</Span>
        <LastCheck>Последнее обновление:{this.props.res.last_check}</LastCheck>
        <Comments comment={this.props.res.comment} id={this.props.res.id} />
      </Wrapper>
    );
  }
}

export default Block;
