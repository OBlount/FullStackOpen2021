import React from 'react';

const Numbers = ({ persons, filter }) => {
	if (!filter) {
		return (
			<div>
				<h2>Numbers:</h2>
				{persons.map((person) => (
					<div key={person.id}>
						{person.name} - {person.number}
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
					</div>
				))}
			</div>
		);
	}
};

export default Numbers;
