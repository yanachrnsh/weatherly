import { filterWeatherDescription } from '@utils/filterWeatherDescription';
import { WeatherDescription } from '@model/weather-information.model';

describe('filter weather description', () => {
	it('should return the filtered array', () => {
		const testWeatherDescription: WeatherDescription = {
			main: 'test',
			description: 'test',
			icon: 'string',
			id: 1,
			pressure: 0,
			visibility: 9,
			wind: {
				speed: 0,
				deg: 0,
				gust: 0,
			},
			humidity: 5,
		};

		const expectedResult = [
			['WIND', { speed: 0, deg: 0, gust: 0 }],
			['HUMIDITY', 5],
			['VISIBILITY', 9],
			['PRESSURE', 0],
		];

		const result = filterWeatherDescription(testWeatherDescription);
		expect(result).toEqual(expect.arrayContaining(expectedResult));
	});
});
