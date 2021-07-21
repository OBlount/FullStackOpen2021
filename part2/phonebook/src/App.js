import React, { useState, useEffect } from 'react';
import AddNumber from './components/AddNumber.js';
import Numbers from './components/Numbers.js';
import Filter from './components/Filter.js';
import Notification from './components/Notification.js';
import NumberService from './services/NumberService.js';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filter, setFilter] = useState('');
	const [notification, setNotification] = useState(null);
	const [notificationType, setNotificationType] = useState('error');

	useEffect(() => {
		NumberService.getAll()
			.then((res) => setPersons(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<h1>Phonebook</h1>

			<Notification message={notification} type={notificationType} />

			<Filter filter={filter} setFilter={setFilter} />

			<AddNumber
				persons={persons}
				setPersons={setPersons}
				newName={newName}
				setNewName={setNewName}
				newNumber={newNumber}
				setNewNumber={setNewNumber}
				setNotification={setNotification}
				setNotificationType={setNotificationType}
			/>

			<Numbers
				persons={persons}
				setPersons={setPersons}
				filter={filter}
			/>
		</div>
	);
};

export default App;
