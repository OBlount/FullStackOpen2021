import React from 'react';

const AddNumber = ({ persons, setPersons, newName, setNewName }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const newNumber = {
			name: newName,
			id: persons.length + 1,
		};

		const submittedNames = persons.map((person) => person.name);
		if (submittedNames.includes(newNumber.name)) {
			alert(
				`'${newNumber.name}' already exists in the phonebook. Please input a new name.`
			);
			setNewName('');
		} else {
			setPersons(persons.concat(newNumber));
			setNewName('');
		}
	};

	const handleNameInput = (event) => {
		setNewName(event.target.value);
	};

	return (
		<div>
			<h2>Add Number:</h2>
			<form onSubmit={handleSubmit}>
				Name: <input value={newName} onChange={handleNameInput} />{' '}
				<button type="submit">Add</button>
			</form>
		</div>
	);
};

export default AddNumber;
