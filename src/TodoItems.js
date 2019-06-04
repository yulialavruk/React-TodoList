import React from 'react';

class TodoItems extends React.Component{
	createTasks = item =>{
		return <li onClick={() => {this.props.delete(item.key)}}
			key={item.key}>{item.text}</li>
	}

	render(){
		const todoEntries = this.props.entries;
		const listItems = todoEntries.map(this.createTasks);
		return(
			<ul className="theList">
				{listItems}
			</ul>
		);
	}
}

export default TodoItems;