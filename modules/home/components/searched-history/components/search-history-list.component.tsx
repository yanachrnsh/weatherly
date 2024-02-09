import { SearchedCity } from '@model/searched-city.model';
import { SearchHistoryItem } from './search-history-item.component';

import { View, Text, FlatList } from 'react-native';
import { FC } from 'react';
import tw from 'twrnc';

interface SearchHistoryItemProps {
	historyList: SearchedCity[];
	handleIconPress: (selectedCity: SearchedCity) => void;
}

export const SearchedHistoryList: FC<SearchHistoryItemProps> = ({ historyList, handleIconPress }) => {
	return (
		<>
			<FlatList
				data={historyList}
				renderItem={({ item }) => <SearchHistoryItem handleIconPress={handleIconPress} searchedCity={item} />}
				keyExtractor={item => item.id}
			></FlatList>
		</>
	);
};
