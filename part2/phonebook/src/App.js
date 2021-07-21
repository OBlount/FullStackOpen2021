import React, { useState, useEffect } from 'react';
import AddNumber from './components/AddNumber.js';
import Filter from './components/Filter.js';
import Numbers from './components/Numbers.js';
import axios from 'axios';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filter, setFilter] = useState('');
	const urlString = 'http://localhost:3001/persons';

	useEffect(() => {
		axios.get(urlString).then((res) => setPersons(res.data));
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

			<Numbers persons={persons} filter={filter} />
		</div>
	);
};

export default App;
