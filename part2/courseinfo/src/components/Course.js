import React from 'react';
import Header from './Header.js';
import Content from './Content.js';
import Total from './Total.js';

const Course = ({ course }) => {
	return (
		<div>
			<Header courseName={course.name} />
			{course.parts.map((part) => {
				return <Content key={part.id} coursePart={part} />;
			})}
			<Total courseParts={course.parts} />
		</div>
	);
};

export default Course;
