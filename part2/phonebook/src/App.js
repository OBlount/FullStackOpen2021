import React, { useState } from 'react';
import AddNumber from './components/AddNumber.js';
import Numbers from './components/Numbers.js';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');

	return (
		<div>
			<h1>Phonebook</h1>
			<AddNumber
				persons={persons}
				setPersons={setPersons}
				newName={newName}
				setNewName={setNewName}
				newNumber={newNumber}
				setNewNumber={setNewNumber}
			/>
			<Numbers persons={persons} />
		</div>
	);
};

export default App;