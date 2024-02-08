import { WeatherDescription, WeatherDescriptionEnum } from '@model/weather-information.model';

export const filterWeatherDescription = (weatherDescription: WeatherDescription) => {
	const filteredArray = Object.entries(weatherDescription).filter(item => {
		const key = item[0].toUpperCase();
		return (
			key === WeatherDescriptionEnum.WIND ||
			key === WeatherDescriptionEnum.HUMIDITY ||
			key === WeatherDescriptionEnum.VISIBILITY ||
			key === WeatherDescriptionEnum.PRESSURE
		);
	});

	return filteredArray;
};
