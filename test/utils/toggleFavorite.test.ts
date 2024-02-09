import { toggleFavorite } from '@utils/toggleFavorite';

describe('toggle favorite ', () => {
	it('should change isFavorite in toggled City to opposite ', () => {
		const searchedHistory = [
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
				isFavorite: true,
				name: 'city1',
				id: '1',
				creationDate: 1000,
			},
		];

		const toggledCity = {
			location: {
				latitude: 0,
				longitude: 0,
			},
			isFavorite: false,
			name: 'city1',
			id: '1',
			creationDate: 1000,
		};

		const result = toggleFavorite(searchedHistory, toggledCity);
		expect(result).toEqual(expect.arrayContaining(expectedResult));
	});

	it('when toggled City is changed to true, previous favorite should be false ', () => {
		const searchedHistory = [
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				isFavorite: true,
				name: 'city1',
				id: '1',
				creationDate: 1000,
			},
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				isFavorite: false,
				name: 'city2',
				id: '2',
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
				name: 'city2',
				id: '2',
				creationDate: 1000,
			},
		];

		const toggledCity = {
			location: {
				latitude: 0,
				longitude: 0,
			},
			isFavorite: false,
			name: 'city2',
			id: '2',
			creationDate: 1000,
		};

		const result = toggleFavorite(searchedHistory, toggledCity);
		expect(result).toEqual(expect.arrayContaining(expectedResult));
	});
});
