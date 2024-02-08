import { WeatherDescriptionEnum } from '@model/weather-information.model';
import { mapToWeatherDescription } from '@utils/setupWeatherDescription';

describe('mapToWeatherDescription', () => {
	it('should return wind description in expected format', () => {
		const wind = {
			speed: 4.58888,
			deg: 240,
			gust: 6.7,
		};

		const result = mapToWeatherDescription([WeatherDescriptionEnum.WIND, wind]);
		expect(result).toEqual([WeatherDescriptionEnum.WIND, '16.5 km/h']);
	});

	it('should return humidity description in expected format', () => {
		const humidity = 75;

		const result = mapToWeatherDescription([WeatherDescriptionEnum.HUMIDITY, humidity]);
		expect(result).toEqual([WeatherDescriptionEnum.HUMIDITY, '75 %']);
	});

	it('should return visibility description in expected format', () => {
		const visibility = 10000;

		const result = mapToWeatherDescription([WeatherDescriptionEnum.VISIBILITY, visibility]);
		expect(result).toEqual([WeatherDescriptionEnum.VISIBILITY, '10 km']);
	});

	it('should return pressure description in expected format', () => {
		const pressure = 1013;

		const result = mapToWeatherDescription([WeatherDescriptionEnum.PRESSURE, pressure]);
		expect(result).toEqual([WeatherDescriptionEnum.PRESSURE, '1013 hPa']);
	});

	it('should return empty string for unknown weather description', () => {
		const result = mapToWeatherDescription(['test', 0]);
		expect(result).toEqual(['test', '']);
	});
});
