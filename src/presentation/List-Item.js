import React from 'react';
import PropTypes from 'prop-types';

const Item = props => {
	return (
		<li className="list-group-item" style={{ margin: '10px' }}>
			{`${props.text}`}
			<span className="badge">{` ${props.id}`}</span>
		</li>
	);
};

Item.propTypes = {
	text: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};

export default Item;
