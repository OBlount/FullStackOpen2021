import React from 'react';

const CountryButton = ({ countryName, setSelectedCountry }) => {
	const handleCountryButton = () => setSelectedCountry(countryName);

	return <button onClick={handleCountryButton}>Show</button>;
};

export default CountryButton;
