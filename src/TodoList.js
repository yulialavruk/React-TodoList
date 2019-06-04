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

  deleteItem = key => {
    const filteredItems = this.state.items.filter(function(item){
      return item.key !==key
    })
    this.setState({
      items: filteredItems
    })
  };

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
        <TodoItems entries = {this.state.items}
                    delete = {this.deleteItem}/>
      </div>
    );
  }
}

export default TodoList;
