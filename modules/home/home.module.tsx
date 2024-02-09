import { useSearchHistory } from '@context/search-history.provider';
import { SearchedCity } from '@model/searched-city.model';
import { SearchHistory, SearchBar } from '@modules/home/components';
import { sortByDateDesc } from '@utils/sortByDateDesc';
import { removeDuplicates } from '@utils/removeDuplicates';
import { useRouter } from 'expo-router';
import { View } from 'react-native';
import tw from 'twrnc';
import { useCallback } from 'react';

export const HomeModule = () => {
	const router = useRouter();
	const { searchedHistory, favorite, toggleFavorite } = useSearchHistory();

	const handleSearchFavoriteButton = useCallback(() => {
		router.navigate({
			pathname: 'weather/',
			params: {
				latitude: favorite?.location.latitude,
				longitude: favorite?.location.longitude,
			},
		});
	}, [favorite]);

	const handleInputPress = useCallback(() => {
		router.push('/search-modal');
	}, []);

	const sortHistory = (history: SearchedCity[]) => {
		if (!history || history.length === 0) return null;

		const historyWithoutDup = removeDuplicates(history);
		return sortByDateDesc(historyWithoutDup);
	};

	return (
		<View style={tw`flex-1 `}>
			<SearchBar
				prepopulatedSearchedValue={favorite ? favorite.name : ''}
				handleInputPress={handleInputPress}
				handleSearchButton={handleSearchFavoriteButton}
			/>
			<SearchHistory handleIconPress={toggleFavorite} searchedHistory={sortHistory(searchedHistory)} />
		</View>
	);
};
