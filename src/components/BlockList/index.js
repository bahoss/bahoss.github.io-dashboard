import React, { Component } from "react";
import Block from "../Block";
import { connect } from "react-redux";
import { selectData } from "../../Entities/Systems/selectors";
import { getData } from "../../Entities/Systems/actions";
import { Wrapper } from "./BlockList.styled";

class BlockList extends Component {
  getData = () => {
    this.props.getData();
  };

  showData = () => {
    return this.props.dataItem.map(item => <Block key={item.id} res={item} />);
  };

  componentDidMount() {
    this.props.getData();
    setInterval(this.props.getData, 20000);
  }

  render() {
    return <Wrapper>{this.showData()}</Wrapper>;
  }
}

const mapStateToProps = state => ({
  dataItem: selectData(state)
});

const mapDispatchToProps = dispatch => {
  return {
    getData: payload => {
      dispatch(getData(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockList);
