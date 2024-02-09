import { useSearchHistory } from '@context/search-history.provider';
import { SearchHistory, SearchBar } from '@modules/home/components';
import { useRouter } from 'expo-router';
import { View } from 'react-native';
import tw from 'twrnc';
import { useCallback } from 'react';
import { sortHistoryHandler } from '@utils/sortHistoryHandler';

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

	return (
		<View style={tw`flex-1 `}>
			<SearchBar
				prepopulatedSearchedValue={favorite ? favorite.name : ''}
				handleInputPress={handleInputPress}
				handleSearchButton={handleSearchFavoriteButton}
			/>
			<SearchHistory handleIconPress={toggleFavorite} searchedHistory={sortHistoryHandler(searchedHistory)} />
		</View>
	);
};
