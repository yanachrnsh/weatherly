import { WeatherDescription, WeatherDescriptionEnum, FilteredWeatherDescriptionValue } from '@model/weather-information.model';

export const filterWeatherDescription = (weatherDescription: WeatherDescription) => {
	const arrayFromWeatherDescription = Object.entries(weatherDescription);

	const filteredArray = arrayFromWeatherDescription
		.filter(item => isSupportedWeather(item[0]))
		.map(item => [item[0].toUpperCase(), item[1]] as [string, FilteredWeatherDescriptionValue]);

	return filteredArray;
};

type WeatherDescriptionItem = [string, WeatherDescription];

const isSupportedWeather = (weatherKey: string) => {
	const key = weatherKey.toUpperCase();
	return (
		key === WeatherDescriptionEnum.WIND ||
		key === WeatherDescriptionEnum.HUMIDITY ||
		key === WeatherDescriptionEnum.VISIBILITY ||
		key === WeatherDescriptionEnum.PRESSURE
	);
};
