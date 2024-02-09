import { temperatureFormatter } from '@utils/temperatureFormatter';

describe('temperature formatter', () => {
	it('should convert temperature from Kelvin to Celsius and return integer number ', () => {
		const testTemp = 270;

		const result = temperatureFormatter(testTemp);
		expect(result).toEqual(-3);
	});
});
