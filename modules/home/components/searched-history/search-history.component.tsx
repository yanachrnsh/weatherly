import { View, Text } from 'react-native';
import tw from 'twrnc';
import { useEffect, useState } from 'react';
import { useSearchHistory } from '@context/search-history.provider';
import { SearchedCity } from '@model/searched-city.model';
import { SearchedHistoryList } from './components/search-history-list.component';

export const SearchHistory = () => {
	const { searchedHistory, updateStoredItem, updateStoredItems } = useSearchHistory();
	const [historyList, setHistory] = useState<SearchedCity[][]>([]);
	const [currentFavorite, setCurrentFavorite] = useState<SearchedCity | null>(null);

	useEffect(() => {
		setHistory(searchedHistory);

		if (searchedHistory && searchedHistory.length > 0) {
			const fav = searchedHistory.find(item => item[1].favorite === true);
			setCurrentFavorite(fav ? fav[1] : null);
		}
	}, [searchedHistory]);

	const handleFavoritePress = (favoriteCity: SearchedCity) => {
		if (currentFavorite === null) {
			setCurrentFavorite(favoriteCity);
			updateStoredItem(favoriteCity.id, { ...favoriteCity, favorite: true });
			return;
		} else if (favoriteCity.id === currentFavorite.id) {
			setCurrentFavorite(null);
			updateStoredItem(favoriteCity.id, { ...favoriteCity, favorite: false });
			return;
		} else {
			setCurrentFavorite(favoriteCity);
			updateStoredItems([
				{ ...favoriteCity, favorite: true },
				{ ...currentFavorite, favorite: false },
			]);
		}
	};

	return (
		<View style={tw`flex-1 mt-3 gap-2 justify-center items-center`} testID="search-history-list">
			{!historyList || historyList.length === 0 ? (
				<Text style={tw`font-bold`}>No searched history</Text>
			) : (
				<SearchedHistoryList historyList={historyList} handleFavoritePress={handleFavoritePress} />
			)}
		</View>
	);
};
