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
	setNotificationType,
}) => {
	const handleUpdateException = (name) => {
		NumberService.getAll()
			.then((res) => setPersons(res))
			.then(() => {
				setNotificationType('error');
				setNotification(
					`Something went wrong. ${name} has already been removed`
				);

				setTimeout(() => setNotification(null), 4000);
			})
			.catch((err) => console.log(err));
	};

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

				NumberService.update(newPerson.id, newPerson)
					.then((person) =>
						setPersons(
							persons.map((aPerson) =>
								aPerson.id !== newPerson.id ? aPerson : person
							)
						)
					)
					.then(() => {
						setNotificationType('notification');
						setNotification(
							`Successfully changed ${newPerson.name}'s number`
						);

						setTimeout(() => setNotification(null), 3000);
					})
					.catch(() => handleUpdateException(newPerson.name));
			}
			setNewName('');
			setNewNumber('');
		} else {
			NumberService.create(newPerson)
				.then((res) => setPersons(persons.concat(res)))
				.then(() => {
					setNotificationType('notification');
					setNotification(`Successfully added ${newPerson.name}`);

					setTimeout(() => setNotification(null), 3000);
				})
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
