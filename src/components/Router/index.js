import React, { Component } from "react";
import Blocks from "../Blocks";
import { connect } from "react-redux";
import {selectData} from "./selectors";
import {getData} from "./actions";

class Router extends Component {
  getData = () => {
    this.props.getData();
  };

  render() {
    return(
    <>
      {this.props.dataItem.map(item => (
        <Blocks key={item.id} res={item} />
      ))}
      <button onClick={this.getData}>Получить данные</button>
    </>
  )
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
)(Router);
