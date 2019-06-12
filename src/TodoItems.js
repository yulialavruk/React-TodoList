import React from "react";
import FlipMove from "react-flip-move";

class TodoItems extends React.Component {
  onDelete = key => () => {
    this.props.delete(key);
  };

  render() {
    const { items } = this.props;
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {items.map(item => (
            <li onClick={this.onDelete(item.key)} key={item.key}>
              {item.text}
            </li>
          ))}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoItems;
