import React from 'react';
import Finder from './CountryStats';

const FindCountry = ({ selectedCountry, setSelectedCountry, allCountries }) => {
	const handleCountryInput = (event) =>
		setSelectedCountry(event.target.value);

	return (
		<div>
			Find Country:
			<input value={selectedCountry} onChange={handleCountryInput} />
			<Finder
				allCountries={allCountries}
				selectedCountry={selectedCountry}
				setSelectedCountry={setSelectedCountry}
			/>
		</div>
	);
};

export default FindCountry;
