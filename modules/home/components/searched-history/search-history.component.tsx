import { View, Text } from 'react-native';
import tw from 'twrnc';
import { FC} from 'react';
import { SearchedCity } from '@model/searched-city.model';
import { SearchedHistoryList } from './components/search-history-list.component';

interface SearchHistoryProps {
	handleIconPress: (selectedCity: SearchedCity) => void;
	searchedHistory: SearchedCity[];
	currentFavorite: SearchedCity | null;
}

export const SearchHistory:FC<SearchHistoryProps> = ({ handleIconPress, searchedHistory, currentFavorite }) => {
	return (
		<View style={tw`flex-1 mt-3 gap-2 justify-center items-center`} testID="search-history-list">
			{!searchedHistory || searchedHistory.length === 0 ? (
				<Text style={tw`font-bold`}>No searched history</Text>
			) : (
				<SearchedHistoryList
					historyList={searchedHistory}
					handleIconPress={handleIconPress}
					currentFavorite={currentFavorite}
				/>
			)}
		</View>
	);
};
