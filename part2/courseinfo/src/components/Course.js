import React from 'react';
import Header from './Header.js';
import Content from './Content.js';
import Total from './Total.js';

const Course = ({ courses }) => {
	return (
		<div>
			{courses.map((course) => {
				return (
					<div key={course.id}>
						<Header courseName={course.name} />
						{course.parts.map((part) => {
							return <Content key={part.id} coursePart={part} />;
						})}
						<Total courseParts={course.parts} />
					</div>
				);
			})}
		</div>
	);
};

export default Course;
