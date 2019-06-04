import React from 'react';
import './TodoList.css';
import TodoItems from './TodoItems';

class TodoList extends React.Component{
  constructor(){
    super();

    this.state = {
      items: []
    }
  }

  addItem = e => {
    if(this._inputElement.value !== ""){
      const newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }
      this.setState((prevState) => {
        return{
          items:prevState.items.concat(newItem)
        } 
      })
    }
    this._inputElement.value = "";
    e.preventDefault();
  }

  render(){
    return (
      <div className="main-todo-list">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={ a => this._inputElement = a}
              placeholder="Enter task"></input>
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries = {this.state.items}/>
      </div>
    );
  }
}

export default TodoList;
