import React from 'react';
import Item from './List-Item';
import PropTypes from 'prop-types';

const List = props => {
	return (
		<ul className="list-group">
			{props.tasks.map(task => <Item key={task.id} {...task} />)}
		</ul>
	);
};

List.propTypes = {
	tasks: PropTypes.array.isRequired,
};

export default List;
