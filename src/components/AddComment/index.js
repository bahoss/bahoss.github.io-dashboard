import React, { Component } from "react";
import { Comment, Form, Button, Input } from "antd";

const TextArea = Input.TextArea;

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
  }

  onChange = e => {
    this.setState({ comment: e.target.value });
  };

  onSubmit = () => {
    fetch(`https://novaweb.studio/dashboard/_api/projects/ ${this.props.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: this.state.comment })
    }).then(response => console.log(response));
  };

  render() {
    return (
      <>
        <Form>
          <Comment>{this.props.comment}</Comment>
        </Form>
        <Form.Item>
          <TextArea rows={1} onChange={this.onChange} />
        </Form.Item>
        <Button onClick={this.onSubmit} type="primary">
          Add Comment
        </Button>
      </>
    );
  }
}

export default AddComment;
