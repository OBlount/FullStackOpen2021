import React, { useState } from 'react';
import AddNumber from './components/AddNumber.js';
import Filter from './components/Filter.js';
import Numbers from './components/Numbers.js';

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
	]);

	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filter, setFilter] = useState('');

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
