import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { SearchHistoryItem } from './components/search-history-item.component';
import tw from 'twrnc';

export const SearchHistoryList = () => {
	return (
		<View style={tw`flex-1 mt-3 gap-2 justify-center items-center`}>
			<View style={tw`pt-3 flex-row`}>
				<Text style={tw`font-bold flex-3 px-2.5`}>Search History</Text>
				<Text style={tw`font-bold flex-1 px-2.5 text-center`}>Favorite</Text>
			</View>
			<FlatList
				data={[
					{ key: 'a', favorite: true },
					{ key: 'b', favorite: false },
					{ key: 'c', favorite: false },
					{ key: 'd', favorite: false },
				]}
				renderItem={({ item }) => <SearchHistoryItem item={item} />}
				keyExtractor={item => item.key}
			></FlatList>
		</View>
	);
};
