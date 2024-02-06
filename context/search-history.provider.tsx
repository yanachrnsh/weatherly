import { View, Text, Alert } from 'react-native';
import { createContext, useContext, useMemo, useState, ReactNode, useEffect } from 'react';
import { SearchedCity } from '../model/searched-city.model';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SearchHistoryContextProps {
	setStoreData: (id: string, value: SearchedCity) => void;
	searchedHistory: SearchedCity[][];
}

const SearchHistoryContext = createContext<SearchHistoryContextProps>({} as SearchHistoryContextProps);

interface SearchHistoryProviderProps {
	children: ReactNode;
}

export const SearchHistoryProvider = ({ children }: SearchHistoryProviderProps) => {
	const [searchedHistory, setSearchedHistory] = useState<SearchedCity[][]>([]);

	useEffect(() => {
		getStoreData();
	}, []);

	const getStoreData = async () => {
		try {
			const keys = await AsyncStorage.getAllKeys();
			const storageJSON = await AsyncStorage.multiGet(keys);
			const searchHistory: SearchedCity[][] = storageJSON.map(item => [item[0], JSON.parse(item[1])]);
			setSearchedHistory(searchHistory);
			console.log('History loaded');
		} catch (e) {
			Alert.alert('Error while loading the history, please try again later');
		}
	};

	const setStoreData = async (id: string, value: SearchedCity) => {
		try {
			const jsonValue = JSON.stringify(value);
			await AsyncStorage.setItem(id, jsonValue);
			await getStoreData();
			console.log('History saved');
		} catch (e) {
			Alert.alert('Error while saving history, please try again later');
		}
	};

	const memoValue = useMemo(() => {
		return {
			setStoreData,
			searchedHistory,
		};
	}, [searchedHistory]);

	return <SearchHistoryContext.Provider value={memoValue}>{children}</SearchHistoryContext.Provider>;
};

export const useSearchHistory = () => {
	return useContext(SearchHistoryContext);
};
