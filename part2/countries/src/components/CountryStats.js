import React from 'react';

const CountryStats = ({ allCountries, selectedCountry }) => {
	const filteredCountries = allCountries.filter((country) =>
		country.name.toLowerCase().includes(selectedCountry.toLowerCase())
	);

	if (filteredCountries.length > 10) {
		return (
			<div>
				Sorry, but you need to narrow down the results using the filter
				above.
			</div>
		);
	} else if (!filteredCountries.length) {
		return (
			<div>
				There were no results matching your search. Please try again.
			</div>
		);
	} else if (filteredCountries.length === 1) {
		const countryInQuestion = filteredCountries[0];

		return (
			<div>
				<h1>{countryInQuestion.name}</h1>
				<p>
					Capital: {countryInQuestion.capital} <br />
					Population: {countryInQuestion.population}
				</p>

				<h1>languages:</h1>
				<ul>
					{countryInQuestion.languages.map((language) => (
						<li key={language.iso639_2}>{language.name}</li>
					))}
				</ul>

				<img
					src={countryInQuestion.flag}
					alt={countryInQuestion.name}
					width="10%;"
				/>
			</div>
		);
	} else {
		return (
			<div>
				{filteredCountries.map((country) => (
					<div key={country.alpha2Code}>{country.name}</div>
				))}
			</div>
		);
	}
};

export default CountryStats;
