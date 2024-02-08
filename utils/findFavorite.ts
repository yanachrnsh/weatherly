import { SearchedCity } from '@model/searched-city.model';

export const findFavorite = (searchedHistory: SearchedCity[]) => {
	if (searchedHistory && searchedHistory.length > 0) {
		const favorite = searchedHistory.find(item => item.favorite === true);
		return favorite ? favorite : null;
	} else {
		return null;
	}
};
