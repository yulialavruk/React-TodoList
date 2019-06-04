import React from 'react';
import FlipMove from 'react-flip-move';

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
				<FlipMove duration={250} easing="ease-out">
					{listItems}
				</FlipMove>
			</ul>
		);
	}
}

export default TodoItems;