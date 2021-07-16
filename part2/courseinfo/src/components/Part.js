import React from 'react';

const Part = ({ partName, numberOfExercises }) => {
	return (
		<div>
			<p>
				{partName}: {numberOfExercises}
			</p>
		</div>
	);
};

export default Part;
