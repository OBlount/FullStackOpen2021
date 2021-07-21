import React from 'react';
import DeleteButton from './DeleteButton.js';

const Numbers = ({ persons, setPersons, filter }) => {
	if (!filter) {
		return (
			<div>
				<h2>Numbers:</h2>
				{persons.map((person) => (
					<div key={person.id}>
						{person.name} - {person.number}
						<DeleteButton
							personsID={person.id}
							personsName={person.name}
							persons={persons}
							setPersons={setPersons}
						/>
					</div>
				))}
			</div>
		);
	} else {
		const filteredPeople = persons.filter((person) =>
			person.name.toLowerCase().includes(filter.toLowerCase())
		);

		return (
			<div>
				<h2>Numbers:</h2>
				{filteredPeople.map((person) => (
					<div key={person.id}>
						{person.name} - {person.number}
						<DeleteButton
							personsID={person.id}
							personsName={person.name}
							persons={persons}
							setPersons={setPersons}
						/>
					</div>
				))}
			</div>
		);
	}
};

export default Numbers;
