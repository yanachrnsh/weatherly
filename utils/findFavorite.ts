import { SearchedCity } from '@model/searched-city.model';

export const findFavorite = (searchedHistory: SearchedCity[] | null) => {
	if (searchedHistory && searchedHistory.length > 0) {
		return searchedHistory.find(item => item.isFavorite) || null;
	}
	return null;
};
