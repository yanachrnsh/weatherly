import { sortByDateDesc } from '@utils/sortByDateDesc';

describe('sort by date desc', () => {
	it('should sort by date desc', () => {
		const testHistory = [
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				isFavorite: true,
				name: 'city1',
				id: '2',
				creationDate: 2,
			},
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				isFavorite: false,
				name: 'city1',
				id: '1',
				creationDate: 1000,
			},
		];

		const expectedResult = [
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				isFavorite: false,
				name: 'city1',
				id: '1',
				creationDate: 1000,
			},
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				isFavorite: true,
				name: 'city1',
				id: '2',
				creationDate: 2,
			},
		];

		const result = sortByDateDesc(testHistory);
		expect(result).toEqual(expect.arrayContaining(expectedResult));
	});

	it('should return empty array if the input is an empty array', () => {
		const result = sortByDateDesc([]);
		expect(result.length).toEqual(0);
	});
});
