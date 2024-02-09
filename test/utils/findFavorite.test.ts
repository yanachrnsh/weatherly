import { findFavorite } from '@utils/findFavorite';

describe('find favorite', () => {
	it('should return the favorite city', () => {
		const testHistory = [
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				isFavorite: false,
				name: 'city1',
				id: '1',
				creationDate: 1,
			},
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				isFavorite: true,
				name: 'city1',
				id: '2',
				creationDate: 1,
			},
		];

		const favorite = findFavorite(testHistory);
		expect(favorite).toEqual(testHistory[1]);
	});

	it('should return null if no favorite ', () => {
		const testHistory = [
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				isFavorite: false,
				name: 'city1',
				id: '1',
				creationDate: 1,
			},
			{
				location: {
					latitude: 0,
					longitude: 0,
				},
				isFavorite: false,
				name: 'city1',
				id: '2',
				creationDate: 1,
			},
		];

		const favorite = findFavorite(testHistory);
		expect(favorite).toBeNull();
	});

	it('should return null if searched history is null', () => {
		const testHistory = null;
		const favorite = findFavorite(testHistory);
		expect(favorite).toBeNull();
	});
});
