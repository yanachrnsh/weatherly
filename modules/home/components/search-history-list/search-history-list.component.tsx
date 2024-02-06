import { View, Text, FlatList } from 'react-native';
import { SearchHistoryItem } from './components/search-history-item.component';
import tw from 'twrnc';
import { useEffect, useState } from 'react';
import { useSearchHistory } from '../../../../context/search-history.provider';
import { SearchedCity } from '../../../../model/searched-city.model';

export const SearchHistoryList = () => {
	const { searchedHistory } = useSearchHistory();

	const [historyList, setHistory] = useState<SearchedCity[][]>([]);

	useEffect(() => {
		setHistory(searchedHistory);
	}, [searchedHistory]);

	if (historyList.length === 0) {
		return (
			<View style={tw`flex-1 mt-3 gap-2 justify-center items-center`}>
				<Text style={tw`font-bold`}>No search history</Text>
			</View>
		);
	}

	return (
		<View style={tw`flex-1 mt-3 gap-2 justify-center items-center`}>
			<View style={tw`pt-3 flex-row`}>
				<Text style={tw`font-bold flex-3 px-2.5`}>Search History</Text>
				<Text style={tw`font-bold flex-1 px-2.5 text-center`}>Favorite</Text>
			</View>
			<FlatList
				data={historyList}
				renderItem={({ item }) => <SearchHistoryItem searchedCity={item[1]} />}
				keyExtractor={item => item[1].id}
			></FlatList>
		</View>
	);
};
