import axios from 'axios';
const baseURL = 'http://localhost:3001/persons/';

const getAll = () => {
	const req = axios.get(baseURL);
	return req.then((res) => res.data);
};

const create = (newPerson) => {
	const req = axios.post(baseURL, newPerson);
	return req.then((res) => res.data);
};

const remove = (personsID) => {
	const req = axios.delete(`${baseURL}${personsID}`);
	return req.then((res) => res.data);
};

const update = (personsID, newPerson) => {
	const req = axios.put(`${baseURL}${personsID}`, newPerson);
	return req.then((res) => res.data);
};

const NumberService = {
	getAll: getAll,
	create: create,
	remove: remove,
	update: update,
};

export default NumberService;
