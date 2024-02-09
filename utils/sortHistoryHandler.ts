import { SearchedCity } from '@model/searched-city.model';
import { removeDuplicates } from '@utils/removeDuplicates';
import { sortByDateDesc } from '@utils/sortByDateDesc';

export const sortHistoryHandler = (history: SearchedCity[] | null) => {
	if (!history || history.length === 0) return null;
	const historyWithoutDup = removeDuplicates(history);
	return sortByDateDesc(historyWithoutDup);
};
