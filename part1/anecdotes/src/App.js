import React, { useState } from 'react';

const ShowCaseButton = ({ setter, anecdotes }) => {
	const handleNewAnecdote = () => {
		setter(Math.floor(Math.random() * anecdotes.length));
	};

	return <button onClick={handleNewAnecdote}>Next anecdote</button>;
};

const ShowCase = ({ selected, setter, anecdotes }) => {
	return (
		<div>
			<h1>Anecdote of the day:</h1>
			<ShowCaseButton setter={setter} anecdotes={anecdotes} />
			<h3>{anecdotes[selected]}</h3>
		</div>
	);
};

const VoterButton = ({ setter, points, selected }) => {
	const handleVote = () => {
		let copyPoints = [...points];
		copyPoints[selected] += 1;
		setter(copyPoints);
	};

	return <button onClick={handleVote}>Vote</button>;
};

const Voter = ({ points, selected, setter }) => {
	return (
		<div>
			<p>has {points[selected]} vote(s)</p>
			<VoterButton setter={setter} points={points} selected={selected} />
		</div>
	);
};

const BestAnecdote = ({ points, anecdotes }) => {
	const topPointsIndex = points.indexOf(Math.max(...points));

	return (
		<div>
			<h1>The top rated anecdote:</h1>
			<h3>{anecdotes[topPointsIndex]}</h3>
			<p>has {points[topPointsIndex]} vote(s)</p>
		</div>
	);
};

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients',
	];

	const [selected, setSelected] = useState(0);
	const [points, setPoints] = useState(
		new Array(anecdotes.length + 1).join('0').split('').map(parseFloat)
	);

	return (
		<div>
			<ShowCase
				selected={selected}
				setter={setSelected}
				anecdotes={anecdotes}
			/>

			<Voter points={points} selected={selected} setter={setPoints} />

			<BestAnecdote points={points} anecdotes={anecdotes} />
		</div>
	);
};

export default App;
