import React, { useState, useEffect } from 'react';
import FindCountry from './components/FindCountry';
import axios from 'axios';

function App() {
	const [allCountries, setAllCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState('');
	const [currentWeather, setCurrentWeather] = useState([]);
	const countryUrlString = 'https://restcountries.eu/rest/v2/all';

	useEffect(() => {
		axios.get(countryUrlString).then((res) => setAllCountries(res.data));
	}, []);

	return (
		<div>
			<FindCountry
				selectedCountry={selectedCountry}
				setSelectedCountry={setSelectedCountry}
				allCountries={allCountries}
				currentWeather={currentWeather}
				setCurrentWeather={setCurrentWeather}
			/>
		</div>
	);
}

export default App;
