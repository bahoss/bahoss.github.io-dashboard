import React, { Component } from "react";
import Block from "../Block";
import { connect } from "react-redux";
import { selectData } from "../../Entities/Systems/selectors";
import { getData } from "../../Entities/Systems/actions";
import { Wrapper } from "./BlockList.styled";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// fake data generator

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: 0,
  margin: 0,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "#fff",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "#fff",
  display: "flex",
  padding: 0,
  overflow: "auto"
});

class BlockList extends Component {
  componentDidMount() {
    this.props.getData();
    //setInterval(this.props.getData, 20000);
  }

  onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.props.dataItem,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {this.props.dataItem.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <Block key={item.id} res={item} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
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
