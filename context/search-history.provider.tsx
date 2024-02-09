import { createContext, useContext, useMemo, useState, ReactNode, useEffect } from 'react';
import { SearchedCity } from '@model/searched-city.model';
import { saveHistory, getHistory } from '@storage/history.storage';
import { findFavorite } from '@utils/findFavorite';
import { toggleFavorite } from '@utils/toggleFavorite';


interface SearchHistoryContextProps {
	searchedHistory: SearchedCity[];
	favorite: SearchedCity | null;
	toggleFavorite: (value: SearchedCity) => void;
	addSearchedCity: (value: SearchedCity) => void;
}

const SearchHistoryContext = createContext<SearchHistoryContextProps>({} as SearchHistoryContextProps);

interface SearchHistoryProviderProps {
	children: ReactNode;
}

export const SearchHistoryProvider = ({ children }: SearchHistoryProviderProps) => {
	const [searchedHistory, setSearchedHistory] = useState<SearchedCity[]>([]);
	const [currentFavorite, setCurrentFavorite] = useState<SearchedCity | null>(null);

	useEffect(() => {
		getHistory().then(history => {
			setCurrentFavorite(findFavorite(history));
			setSearchedHistory(history);
		});
	}, []);

	const toggleFavoriteHandler = (toggledCity: SearchedCity) => {
		const updatedHistory = toggleFavorite(searchedHistory, toggledCity);
		setCurrentFavorite(findFavorite(updatedHistory));
		setSearchedHistory(updatedHistory);
		saveHistory(updatedHistory);
	};

	const addSearchedCityHandler = (city: SearchedCity) => {
		const updatedHistory = [...searchedHistory, city];
		setSearchedHistory(updatedHistory);
		saveHistory(updatedHistory);
	};


	const memoValue = useMemo(() => {
		return {
			searchedHistory,
			favorite: currentFavorite,
			toggleFavorite: toggleFavoriteHandler,
			addSearchedCity: addSearchedCityHandler,
		};
	}, [searchedHistory]);

	return <SearchHistoryContext.Provider value={memoValue}>{children}</SearchHistoryContext.Provider>;
};

export const useSearchHistory = () => {
	return useContext(SearchHistoryContext);
};
