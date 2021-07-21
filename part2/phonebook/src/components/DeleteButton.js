import React from 'react';
import NumberService from '../services/NumberService.js';

const DeleteButton = ({ personsID, personsName, persons, setPersons }) => {
	const handleDeleteButton = (ID, name) => {
		if (window.confirm(`Do you really want to delete ${name}?`)) {
			NumberService.remove(ID)
				.then(() =>
					setPersons(persons.filter((person) => person.id !== ID))
				)
				.catch((err) => console.log(err));
		}
	};

	return (
		<div>
			<button onClick={() => handleDeleteButton(personsID, personsName)}>
				Delete
			</button>
		</div>
	);
};

export default DeleteButton;
