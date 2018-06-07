import React, { Component } from 'react';
import Button from '../presentation/Button';
import List from '../presentation/List';

class ToDo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			taskCounter: 1,
		};
	}

	onAddTask(event) {
		event.preventDefault();

		const { tasks, taskCounter } = this.state;

		this.setState(prevState => {
			return {
				tasks: [...tasks, { id: taskCounter, text: 'Task number' }],
				taskCounter: prevState.taskCounter + 1,
			};
		});
	}

	onRemoveTask(event) {
		event.preventDefault();

		const { tasks } = this.state;

		tasks.pop();

		this.setState({
			tasks,
		});
	}

	onClearTasks(event) {
		event.preventDefault();

		this.setState({
			tasks: [],
			taskCounter: 1,
		});
	}

	render() {
		return (
			<div className="container text-center">
				<div className="btn-group" style={{ margin: '30px' }}>
					<Button
						className="btn btn-lg btn-primary"
						icon="plus"
						title="Add"
						onAction={this.onAddTask.bind(this)}
					/>
					<Button
						className="btn btn-lg btn-warning"
						icon="trash"
						title="Remove"
						onAction={this.onRemoveTask.bind(this)}
					/>
					<Button
						className="btn btn-lg btn-danger"
						icon="remove"
						title="Clear"
						onAction={this.onClearTasks.bind(this)}
					/>
				</div>
				<List tasks={this.state.tasks} />
			</div>
		);
	}
}

export default ToDo;
