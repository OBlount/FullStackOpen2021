import React, { useState } from 'react';

const FeedbackButton = ({ name, handleClick }) => {
	return (
		<div>
			<button onClick={handleClick}>{name}</button>
		</div>
	);
};

const Statistics = ({ name, count }) => {
	return (
		<div>
			{name}: {count}
		</div>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>Give Feedback:</h1>
			<FeedbackButton name="Good" handleClick={() => setGood(good + 1)} />
			<FeedbackButton
				name="Neutral"
				handleClick={() => setNeutral(neutral + 1)}
			/>
			<FeedbackButton name="Bad" handleClick={() => setBad(bad + 1)} />

			<h1>Statistics:</h1>
			<Statistics name="Good" count={good} />
			<Statistics name="Neutral" count={neutral} />
			<Statistics name="Bad" count={bad} />
		</div>
	);
};

export default App;
