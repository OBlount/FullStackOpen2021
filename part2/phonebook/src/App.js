import React, { useState, useEffect } from 'react';
import AddNumber from './components/AddNumber.js';
import Numbers from './components/Numbers.js';
import Filter from './components/Filter.js';
import NumberService from './services/NumberService.js';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filter, setFilter] = useState('');

	useEffect(() => {
		NumberService.getAll()
			.then((res) => setPersons(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<h1>Phonebook</h1>

			<Filter filter={filter} setFilter={setFilter} />

			<AddNumber
				persons={persons}
				setPersons={setPersons}
				newName={newName}
				setNewName={setNewName}
				newNumber={newNumber}
				setNewNumber={setNewNumber}
			/>

			<Numbers
				persons={persons}
				setPersons={setPersons}
				filter={filter}
			/>
		</div>
	);
};

export default App;
