import React from 'react';

const Notification = ({ message, type }) => {
	if (message === null) {
		return null;
	} else if (type === 'notification') {
		return (
			<div className="notification">
				<p>{message}</p>
			</div>
		);
	} else if (type === 'error') {
		return (
			<div className="error">
				<p>{message}</p>
			</div>
		);
	} else {
		return null;
	}
};

export default Notification;
