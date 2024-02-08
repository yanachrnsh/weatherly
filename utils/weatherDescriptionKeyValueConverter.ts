import { WeatherDescription, WeatherDescriptionEnum } from '@model/weather-information.model';

const weatherDescriptionKeyValueConverter = (weatherDescription: WeatherDescription) => {
	return weatherDescription.description;
};
