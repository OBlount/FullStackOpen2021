import React from 'react';
import NumberService from '../services/NumberService.js';

const AddNumber = ({
	persons,
	setPersons,
	newName,
	setNewName,
	newNumber,
	setNewNumber,
	setNotification,
}) => {
	const handleSubmit = (event) => {
		event.preventDefault();

		let newPerson = {
			name: newName,
			number: newNumber,
			id: Math.max(persons.map((person) => person.id)) + 1,
		};

		const submittedNames = persons.map((person) => person.name);
		if (submittedNames.includes(newPerson.name)) {
			if (
				window.confirm(
					`'${newPerson.name}' already exists in the phonebook. Do you want to replace them with the new number?`
				)
			) {
				const oldPerson = persons.find(
					(person) => person.name === newPerson.name
				);
				newPerson = { ...oldPerson, number: newNumber };

				NumberService.update(newPerson.id, newPerson).then((person) =>
					setPersons(
						persons.map((aPerson) =>
							aPerson.id !== newPerson.id ? aPerson : person
						)
					)
				);
			}
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
