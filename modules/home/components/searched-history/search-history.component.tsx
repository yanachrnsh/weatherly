import { View, Text } from 'react-native';
import tw from 'twrnc';
import { useEffect, useState } from 'react';
import { useSearchHistory } from '@context/search-history.provider';
import { SearchedCity } from '@model/searched-city.model';
import { SearchedHistoryList } from './components/search-history-list.component';
import { findFavorite } from '@utils/findFavorite';


export const SearchHistory = () => {
	const { searchedHistory, updateStoredItem, updateStoredItems } = useSearchHistory();
	const [currentFavorite, setCurrentFavorite] = useState<SearchedCity | null>(null);

	useEffect(() => {
		const favorite = findFavorite(searchedHistory);
		setCurrentFavorite(favorite);
	}, [searchedHistory]);

	const handleFavoritePress = (selectedCity: SearchedCity) => {
		if (currentFavorite === null) {
			updateStoredItem(selectedCity.id, { ...selectedCity, favorite: true });
			return;
		} else if (selectedCity.id === currentFavorite.id) {
			updateStoredItem(selectedCity.id, { ...selectedCity, favorite: false });
			return;
		} else {
			updateStoredItems([
				{ ...selectedCity, favorite: true },
				{ ...currentFavorite, favorite: false },
			]);
		}
	};

	return (
		<View style={tw`flex-1 mt-3 gap-2 justify-center items-center`} testID="search-history-list">
			{!searchedHistory || searchedHistory.length === 0 ? (
				<Text style={tw`font-bold`}>No searched history</Text>
			) : (
				<SearchedHistoryList historyList={searchedHistory} handleFavoritePress={handleFavoritePress} />
			)}
		</View>
	);
};
