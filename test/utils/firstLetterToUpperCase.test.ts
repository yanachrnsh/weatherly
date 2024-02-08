import { firstLetterToUpperCase } from '@utils/firstLetterToUpperCase';

describe('first letter to upper case', () => {
	it('should return the string with the first letter in upper case', () => {
		const testString = 'test';
		const result = firstLetterToUpperCase(testString);
		expect(result).toEqual('Test');
	});

	it('should return an empty string if the input is an empty string', () => {
		const testString = '';
		const result = firstLetterToUpperCase(testString);
		expect(result).toEqual('');
	});
});
