import React, { Component } from "react";
import Block from "../Block";
import { Wrapper } from "./BlockList.styled";
import { connect } from "react-redux";
import { selectData, selectPosition } from "../../Entities/Systems/selectors";
import { getData, setPosition } from "../../Entities/Systems/actions";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.props.dataItem,
      result.source.index,
      result.destination.index
    );

    this.props.setPosition(items);

    const position = items.map(a => a.id);
    localStorage.setItem("position", JSON.stringify(position));
  };

  checkPosition = response => {
    const positionFromLocalStorage = JSON.parse(
      localStorage.getItem("position")
    );
    if (positionFromLocalStorage === null) {
      return response;
    } else if (positionFromLocalStorage.length === response.length) {
      return positionFromLocalStorage.map(position =>
        response.find(i => i.id === position)
      );
    } else if (positionFromLocalStorage.length !== response.length) {
      const getId = response.map(a => a.id);
      const checkId = (arr1, arr2) => {
        var arr = [];
        arr1 = arr1
          .toString()
          .split(",")
          .map(Number);
        arr2 = arr2
          .toString()
          .split(",")
          .map(Number);

        for (var i in arr1) {
          if (arr2.indexOf(arr1[i]) === -1) arr.push(arr1[i]);
        }

        return arr;
      };
      const newId = checkId(getId, positionFromLocalStorage);
      console.log(newId);
      const newPosition = positionFromLocalStorage.concat(newId);
      localStorage.setItem("position", JSON.stringify(newPosition));
      return newPosition.map(position => response.find(i => i.id === position));
    } else {
      return response;
    }
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    if (this.props.dataItem.length === 0) {
      return "Загрузка...";
    }
    const reorderedList = this.checkPosition(this.props.dataItem);
    return (
      <Wrapper>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {reorderedList.map((item, index) => (
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
      </Wrapper>
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
