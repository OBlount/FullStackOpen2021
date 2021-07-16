import React from 'react';

const Total = ({ courseParts }) => {
	const totalExercises = courseParts
		.map((part) => part.exercises)
		.reduce((total, current) => total + current);

	return (
		<div>
			<strong>A total of {totalExercises} exercises</strong>
		</div>
	);
};

export default Total;
