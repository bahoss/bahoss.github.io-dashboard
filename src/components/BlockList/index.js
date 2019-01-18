import React, { Component } from "react";
import Block from "../Block";
import { connect } from "react-redux";
import { selectData, selectPosition } from "../../Entities/Systems/selectors";
import { getData, setPosition } from "../../Entities/Systems/actions";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

class BlockList extends Component {
  componentDidMount() {
    this.props.getData();
  }

  checkPosition = response => {
    const positionFromLocalStorage = JSON.parse(
      localStorage.getItem("position")
    );
    if (positionFromLocalStorage && this.props.dataItem.length > 0) {
      return positionFromLocalStorage.map(position =>
        response.find(i => i.id === position)
      );
    } else {
      return response;
    }
  };

  changed = this.checkPosition(this.props.dataItem);

  onclick = () => {
    return this.changed.map(item => <Block key={item.id} res={item} />);
  };
  render() {
    return (
      <>
        <button onClick={this.onclick}>Yes</button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  dataItem: selectData(state),
  positionItem: selectPosition(state)
});

const mapDispatchToProps = dispatch => {
  return {
    getData: payload => {
      dispatch(getData(payload));
    },

    setPosition: payload => {
      dispatch(setPosition(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockList);
