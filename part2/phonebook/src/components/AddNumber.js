import React from 'react';
import NumberService from '../services/NumberService.js';

const AddNumber = ({
	persons,
	setPersons,
	newName,
	setNewName,
	newNumber,
	setNewNumber,
}) => {
	const handleSubmit = (event) => {
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
			NumberService.create(newPerson)
				.then((res) => setPersons(persons.concat(res)))
				.catch((err) => console.log(err));

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
