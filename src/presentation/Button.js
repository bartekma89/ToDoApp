import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
	return (
		<button onClick={props.onAction} className="btn btn-default" {...props}>
			{props.title}{' '}
			{props.icon ? (
				<span className={`glyphicon glyphicon-${props.icon}`} />
			) : null}
		</button>
	);
};

Button.propTypes = {
	onAction: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

export default Button;
