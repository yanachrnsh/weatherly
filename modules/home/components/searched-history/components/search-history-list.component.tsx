import { SearchedCity } from '@model/searched-city.model';
import { SearchHistoryItem } from './search-history-item.component';

import { View, Text, FlatList } from 'react-native';
import { FC } from 'react';
import tw from 'twrnc';

interface SearchHistoryItemProps {
	historyList: SearchedCity[];
	handleIconPress: (selectedCity: SearchedCity) => void;
	currentFavorite: SearchedCity | null;

}

export const SearchedHistoryList: FC<SearchHistoryItemProps> = ({ historyList, handleIconPress, currentFavorite }) => {
	return (
		<>
			<View style={tw`pt-3 flex-row`}>
				<Text style={tw`font-bold flex-3 px-2.5`}>Search History</Text>
				<Text style={tw`font-bold flex-1 px-2.5 text-center`}>Favorite</Text>
			</View>
			<FlatList
				data={historyList}
				renderItem={({ item }) => <SearchHistoryItem handleIconPress={handleIconPress} searchedCity={item} />}
				keyExtractor={item => item.id}
			></FlatList>
		</>
	);
};
