import { removeDuplicates } from '@utils/removeDuplicates';

describe('remove duplicates', () => {
	it('should remove duplicates', () => {
		const testHistory = [
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				favorite: false,
				name: 'city1',
				id: '1',
				creationDate: 1,
			},
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				favorite: true,
				name: 'city1',
				id: '2',
				creationDate: 1,
			},
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				favorite: true,
				name: 'city2',
				id: '2',
				creationDate: 1,
			},
		];

		const expectedResult = [
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				favorite: true,
				name: 'city1',
				id: '2',
				creationDate: 1,
			},
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				favorite: true,
				name: 'city2',
				id: '2',
				creationDate: 1,
			},
		];

		const result = removeDuplicates(testHistory);
		expect(result).toEqual(expect.arrayContaining(expectedResult));
	});

	it('if duplicate exist, should return the latest saved', () => {
		const testHistory = [
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				favorite: false,
				name: 'city1',
				id: '1',
				creationDate: 10,
			},
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				favorite: true,
				name: 'city1',
				id: '2',
				creationDate: 20,
			},
		];

		const expectedResult = [
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				favorite: true,
				name: 'city1',
				id: '2',
				creationDate: 20,
			},
		];

		const result = removeDuplicates(testHistory);
		expect(result).toEqual(expect.arrayContaining(expectedResult));
	});

	it('if empty array is passed, should return empty array', () => {
		const testHistory = [] as any[];

		const result = removeDuplicates(testHistory);
		expect(result.length).toBe(0);
	});
});
