import AsyncStorage from '@react-native-async-storage/async-storage';
import { SearchedCity } from '@model/searched-city.model';

const HISTORY_STORAGE_KEY = 'history';

export const getHistory = async (): Promise<SearchedCity[]> => {
	return await AsyncStorage.getItem(HISTORY_STORAGE_KEY).then(history => {
		if (history) {
			return JSON.parse(history);
		}
		return [];
	});
};

export const saveHistory = (history: SearchedCity[]) => {
	AsyncStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
};
