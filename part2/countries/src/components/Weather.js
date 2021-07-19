import React, { useEffect } from 'react';
import axios from 'axios';

const Weather = ({ currentWeather, setCurrentWeather, countryCapital }) => {
	const weatherUrlString = 'http://api.weatherstack.com/current';
	const weatherAPIKey = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		axios
			.get(
				weatherUrlString.concat(
					`?access_key=${weatherAPIKey}&query=${countryCapital}`
				)
			)
			.then((res) => setCurrentWeather(res.data.current));
	}, [countryCapital, setCurrentWeather, weatherAPIKey]);

	return (
		<div>
			<h1>Weather in {countryCapital}:</h1>
			<p>Temperature: {currentWeather.temperature} Celcius</p>

			<img
				src={currentWeather.weather_icons}
				alt={currentWeather.weather_descriptions}
				width="5%;"
			/>

			<p>
				Wind: {currentWeather.wind_speed} mph | Direction{' '}
				{currentWeather.wind_dir}
			</p>
		</div>
	);
};

export default Weather;
