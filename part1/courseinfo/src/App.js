import React from 'react';

const Header = (props) => {
	return (
		<>
			<h1>{props.course}</h1>
		</>
	);
};

const Content = (props) => {
	const parts = props.parts;

	return (
		<>
			<Part name={parts[0].name} exercises={parts[0].exercises} />
			<Part name={parts[1].name} exercises={parts[1].exercises} />
			<Part name={parts[2].name} exercises={parts[2].exercises} />
		</>
	);
};

const Part = (props) => {
	return (
		<p>
			{props.name} {props.exercises}
		</p>
	);
};

const Total = (props) => {
	const part1 = props.total[0];
	const part2 = props.total[1];
	const part3 = props.total[2];

	return (
		<>
			<p>
				Number of exercises{' '}
				{part1.exercises + part2.exercises + part3.exercises}
			</p>
		</>
	);
};

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
			},
			{
				name: 'State of a component',
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total total={course.parts} />
		</div>
	);
};

export default App;
