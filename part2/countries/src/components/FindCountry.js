import React from 'react';
import CountryStats from './CountryStats';

const FindCountry = ({
	selectedCountry,
	setSelectedCountry,
	allCountries,
	currentWeather,
	setCurrentWeather,
}) => {
	const handleCountryInput = (event) =>
		setSelectedCountry(event.target.value);

	return (
		<div>
			Find Country:
			<input value={selectedCountry} onChange={handleCountryInput} />
			<CountryStats
				allCountries={allCountries}
				selectedCountry={selectedCountry}
				setSelectedCountry={setSelectedCountry}
				currentWeather={currentWeather}
				setCurrentWeather={setCurrentWeather}
			/>
		</div>
	);
};

export default FindCountry;
