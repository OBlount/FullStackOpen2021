import React from 'react';
import Part from './Part.js';

const Content = ({ coursePart }) => {
	return (
		<div>
			<Part
				partName={coursePart.name}
				numberOfExercises={coursePart.exercises}
			/>
		</div>
	);
};

export default Content;
