import { SearchedCity } from '@model/searched-city.model';

export const sortByDateDesc = (searchedHistory: SearchedCity[]) => {
	return searchedHistory.sort((a, b) => b.creationDate - a.creationDate);
};


