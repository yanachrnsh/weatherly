import { View, Text, Alert } from 'react-native';
import { createContext, useContext, useMemo, useState, ReactNode, useEffect } from 'react';
import { SearchedCity } from '@model/searched-city.model';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SearchHistoryContextProps {
	setStoredHistory: (id: string, value: SearchedCity) => void;
	searchedHistory: SearchedCity[];
	updateStoredItem: (id: string, value: SearchedCity) => void;
	updateStoredItems: (value: SearchedCity[]) => void;
}

const SearchHistoryContext = createContext<SearchHistoryContextProps>({} as SearchHistoryContextProps);

interface SearchHistoryProviderProps {
	children: ReactNode;
}

export const SearchHistoryProvider = ({ children }: SearchHistoryProviderProps) => {
	const [searchedHistory, setSearchedHistory] = useState<SearchedCity[]>([]);

	useEffect(() => {
		getStoredHistory();
	}, []);

	const getStoredHistory = async () => {
		try {
			const keys = await AsyncStorage.getAllKeys();

			if (keys.length === 0) {
				setSearchedHistory([]);
				return;
			}
			const storageJSON = await AsyncStorage.multiGet(keys);

			const searchedHistory: SearchedCity[] = storageJSON.map(item => JSON.parse(item[1]!));

			setSearchedHistory(searchedHistory);
			console.log('History loaded');
		} catch (e) {
			Alert.alert('Error while loading the history, please try again later');
		}
	};

	const setStoredHistory = async (id: string, value: SearchedCity) => {
		try {
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem(id, jsonValue);
			await getStoredHistory();
			console.log('History saved');
		} catch (e) {
			Alert.alert('Error while saving history, please try again later');
		}
	};

	const updateStoredItem = async (id: string, value: SearchedCity) => {
		try {
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem(id, jsonValue);
			await getStoredHistory();
			console.log('History updated');
		} catch (e) {
			Alert.alert('Error while updating history, please try again later');
		}
	};

	const updateStoredItems = async (value: SearchedCity[]) => {
		try {
			const keyValuesPairs: [string, string][] = value.map(item => [item.id, JSON.stringify(item)]);
			await AsyncStorage.multiSet([...keyValuesPairs]);
			await getStoredHistory();
			console.log('History updated');
		} catch (e) {
			Alert.alert('Error while updating history, please try again later');
		}
	};

	const memoValue = useMemo(() => {
		return {
			setStoredHistory,
			searchedHistory,
			updateStoredItem,
			updateStoredItems,
		};
	}, [searchedHistory]);

	return <SearchHistoryContext.Provider value={memoValue}>{children}</SearchHistoryContext.Provider>;
};

export const useSearchHistory = () => {
	return useContext(SearchHistoryContext);
};
