import React, { Component } from "react";
import { Comment, Form, Button, Input } from "antd";
import {connect} from "react-redux";
import {addComment} from "../../entities/actions"

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
    const payload = {
      id: this.props.id,
      body: { comment: this.state.comment }
    }
    this.props.onSubmit(payload);
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
const mapDispatchToProps = dispatch =>{
  return{
    onSubmit: payload => {dispatch(addComment(payload))}
  }

};
export default connect(null, mapDispatchToProps)(AddComment);
