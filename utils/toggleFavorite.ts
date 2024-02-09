import { SearchedCity } from '@model/searched-city.model';

export const toggleFavorite = (searchedHistory: SearchedCity[], toggledCity: SearchedCity): SearchedCity[] => {
	return searchedHistory.map(city => {
		if (city.id === toggledCity.id) {
			return {
				...city,
				isFavorite: !city.isFavorite,
			};
		} else {
			return {
				...city,
				isFavorite: false,
			};
		}
	});
};
