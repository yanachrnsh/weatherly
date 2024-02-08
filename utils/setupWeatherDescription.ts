import { Wind } from '@api/dto/weather.response.dto';
import { WeatherDescription, WeatherDescriptionEnum } from '@model/weather-information.model';

type FilteredWeatherDescription = [string, number | Wind][];

export const setupWeatherDescription = (weatherDescription: FilteredWeatherDescription): [string, string][] => {
	return weatherDescription.map(item => {
		switch (item[0].toUpperCase()) {
			case WeatherDescriptionEnum.WIND:
				const wind = item[1] as Wind;
				return [item[0], `${(wind.speed * 3.6).toFixed(1)} km/h`] as [string, string];
			case WeatherDescriptionEnum.HUMIDITY:
				const humidity = item[1] as number;
				return [item[0], `${Math.trunc(humidity)} %`] as [string, string];
			case WeatherDescriptionEnum.VISIBILITY:
				const visibility = item[1] as number;
				return [item[0], `${(visibility / 1000).toFixed()} km`] as [string, string];
			case WeatherDescriptionEnum.PRESSURE:
				const pressure = item[1] as number;
				return [item[0], `${Math.trunc(pressure)} hPa`] as [string, string];
			default:
				return [item[0], ''] as [string, string];
		}
	});
};
