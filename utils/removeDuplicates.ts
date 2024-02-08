import { SearchedCity } from "@model/searched-city.model";

export const removeDuplicates = (searchedHistory: SearchedCity[]) => {
	let result = new Map();

	searchedHistory.forEach(item => {
		if (!result.has(item.name)) {
			result.set(item.name, item);
		} else {
			if (item.creationDate > result.get(item.name).creationDate) {
				result.set(item.name, item);
			}
		}
	});

	return Array.from(result.values());
};
