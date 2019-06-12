import React from "react";
import "./TodoList.css";
import TodoItems from "./TodoItems";

class TodoList extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      value: ""
    };
  }

  onChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  addItem = e => {
    e.preventDefault();
    if (this.state.value !== "") {
      const newItem = {
        text: this.state.value,
        key: Date.now()
      };
      this.setState(prevState => {
        return {
          value: "",
          items: [...prevState.items, newItem]
        };
      });
    }
  };

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    });
  };

  render() {
    const { items, value } = this.state;
    return (
      <div className="main-todo-list">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              value={value}
              placeholder="Enter task"
              onChange={this.onChange}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems items={items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
