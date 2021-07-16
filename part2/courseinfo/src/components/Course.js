import React from 'react';
import Header from './Header.js';
import Content from './Content.js';

const Course = ({ course }) => {
	return (
		<div>
			<Header courseName={course.name} />
			{course.parts.map((part) => {
				return <Content key={part.id} coursePart={part} />;
			})}
		</div>
	);
};

export default Course;
