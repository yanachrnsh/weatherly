import { Wind } from '@api/dto/weather.response.dto';
import { FilteredWeatherDescription, WeatherDescriptionEnum } from '@model/weather-information.model';

export const setupWeatherDescription = (weatherDescription: FilteredWeatherDescription[]): Description[] => {
	return weatherDescription.map(item => mapToWeatherDescription(item));
};

export type Description = {
	name: string;
	value: string;
};

export const mapToWeatherDescription = (item: FilteredWeatherDescription): Description => {
	const descriptionName = item[0];
	let value = '';
	switch (descriptionName) {
		case WeatherDescriptionEnum.WIND:
			const wind = item[1] as Wind;
			value = `${(wind.speed * 3.6).toFixed(1)} km/h`;
			break;
		case WeatherDescriptionEnum.HUMIDITY:
			const humidity = item[1] as number;
			value = `${Math.trunc(humidity)} %`;
			break;
		case WeatherDescriptionEnum.VISIBILITY:
			const visibility = item[1] as number;
			value = `${(visibility / 1000).toFixed()} km`;
			break;
		case WeatherDescriptionEnum.PRESSURE:
			const pressure = item[1] as number;
			value = `${Math.trunc(pressure)} hPa`;
			break;
	}
	return { name: descriptionName, value };
};
