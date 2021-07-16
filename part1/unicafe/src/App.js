import React, { useState } from 'react';

const Button = ({ name, handleClick }) => {
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
			<Button name="Good" handleClick={() => setG(countG + 1)} />
			<Button name="Neutral" handleClick={() => setN(countN + 1)} />
			<Button name="Bad" handleClick={() => setB(countB + 1)} />
		</div>
	);
};

const Statistic = ({ name, count }) => {
	return (
		<tr>
			<td>{name}</td>
			<td>{count}</td>
		</tr>
	);
};

const StatisticAll = ({ good, neutral, bad }) => {
	const all = good + neutral + bad;

	return (
		<tr>
			<td>All Records</td>
			<td>{all}</td>
		</tr>
	);
};

const StatisticAverage = ({ good, neutral, bad }) => {
	const all = good + neutral + bad;
	const average = (good - bad) / all;

	return (
		<tr>
			<td>Average Score</td>
			<td>{average}</td>
		</tr>
	);
};

const StatisticPositive = ({ good, neutral, bad }) => {
	const all = good + neutral + bad;

	return (
		<tr>
			<td>Positive</td>
			<td>{(good / all) * 100}%</td>
		</tr>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	if (good + neutral + bad > 0) {
		return (
			<div>
				<h1>Statistics:</h1>
				<table>
					<tbody>
						<Statistic name="Good" count={good} />
						<Statistic name="Neutral" count={neutral} />
						<Statistic name="Bad" count={bad} />

						<StatisticAll good={good} neutral={neutral} bad={bad} />
						<StatisticAverage
							good={good}
							neutral={neutral}
							bad={bad}
						/>
						<StatisticPositive
							good={good}
							neutral={neutral}
							bad={bad}
						/>
					</tbody>
				</table>
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
