import React, { Component } from "react";
import Blocks from "../Blocks";
import { connect } from "react-redux";
import {selectData} from "../../entities/selectors";
import {getData} from "../../entities/actions";
import {Wrapper} from "./Router.styled"

class Router extends Component {
  getData = () => {
    this.props.getData();
  };

  showData = () =>{
    return this.props.dataItem.map(item => (
      <Blocks key={item.id} res={item} />
    ))
  }

  componentDidMount(){
    this.props.getData()
    setInterval(this.props.getData, 20000)
  };

  render() {
    return(
    <Wrapper>
      {this.showData()}
    </Wrapper>
  )
  }
};

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
