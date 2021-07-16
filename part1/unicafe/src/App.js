import React, { useState } from 'react';

const FeedbackButton = ({ name, handleClick }) => {
	return (
		<div>
			<button onClick={handleClick}>{name}</button>
		</div>
	);
};

const FeedBack = ({ countG, countN, countB, setG, setN, setB }) => {
	return (
		<div>
			<h1>Give FeedBack:</h1>
			<FeedbackButton name="Good" handleClick={() => setG(countG + 1)} />
			<FeedbackButton
				name="Neutral"
				handleClick={() => setN(countN + 1)}
			/>
			<FeedbackButton name="Bad" handleClick={() => setB(countB + 1)} />
		</div>
	);
};

const StatisticsBasic = ({ name, count }) => {
	return (
		<div>
			{name}: {count}
		</div>
	);
};

const StatisticsExtra = ({ good, neutral, bad }) => {
	let all = good + neutral + bad;
	let average = (good - bad) / all;

	return (
		<div>
			<p>All Records: {all}</p>
			<p>Average Score: {average}</p>
			<p>Positive: {(good / all) * 100}%</p>
		</div>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	if (good + neutral + bad > 0) {
		return (
			<div>
				<h1>Statistics:</h1>
				<StatisticsBasic name="Good" count={good} />
				<StatisticsBasic name="Neutral" count={neutral} />
				<StatisticsBasic name="Bad" count={bad} />

				<StatisticsExtra good={good} neutral={neutral} bad={bad} />
			</div>
		);
	} else {
		return (
			<div>
				<h1>Statistics:</h1>
				<p>No Feedback given.</p>
			</div>
		);
	}
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<FeedBack
				countG={good}
				countN={neutral}
				countB={bad}
				setG={setGood}
				setN={setNeutral}
				setB={setBad}
			/>

			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
