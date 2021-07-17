import React from 'react';

const Filter = ({ filter, setFilter }) => {
	const handleFilterInput = (event) => {
		setFilter(event.target.value);
	};

	return (
		<div>
			Filter show with:
			<input value={filter} onChange={handleFilterInput} />
		</div>
	);
};

export default Filter;
