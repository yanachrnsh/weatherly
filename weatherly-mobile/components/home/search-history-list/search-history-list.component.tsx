import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { SearchHistoryItem } from './components/search-history-item/search-history-item.component';
import { styles } from './search-history-list.style';

export const SearchHistoryList = () => {
	return (
		<View style={styles.listContainer}>
			<View style={styles.listHeaderWrapper}>
				<Text style={styles.listHeaderLeft}>Search History</Text>
				<Text style={styles.listHeaderRight}>Favorite</Text>
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
