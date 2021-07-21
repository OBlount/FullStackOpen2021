import React from 'react';
import axios from 'axios';

const AddNumber = ({
	persons,
	setPersons,
	newName,
	setNewName,
	newNumber,
	setNewNumber,
}) => {
	const handleSubmit = (event) => {
		const baseURL = 'http://localhost:3001/persons';
		event.preventDefault();

		const newPerson = {
			name: newName,
			number: newNumber,
			id: persons.length + 1,
		};

		const submittedNames = persons.map((person) => person.name);
		if (submittedNames.includes(newPerson.name)) {
			alert(
				`'${newPerson.name}' already exists in the phonebook. Please input a new name.`
			);
			setNewName('');
			setNewNumber('');
		} else {
			axios
				.post(baseURL, newPerson)
				.then((res) => setPersons(persons.concat(res.data)))
				.catch((err) => alert(err));

			setNewName('');
			setNewNumber('');
		}
	};

	const handleNameInput = (event) => {
		setNewName(event.target.value);
	};

	const handleNumberInput = (event) => {
		setNewNumber(event.target.value);
	};

	return (
		<div>
			<h2>Add Number:</h2>
			<form onSubmit={handleSubmit}>
				<div>
					Name: <input value={newName} onChange={handleNameInput} />
				</div>
				<div>
					Number:
					<input value={newNumber} onChange={handleNumberInput} />
				</div>
				<div>
					<button type="submit">Add</button>
				</div>
			</form>
		</div>
	);
};

export default AddNumber;
