import { COLORS } from '@constants/style.constants';
import { useSearchHistory } from '@context/search-history.provider';
import { SearchedCity } from '@model/searched-city.model';
import { SearchHistory, SearchBar } from '@modules/home/components';
import { findFavorite } from '@utils/findFavorite';
import { sortByDateDesc } from '@utils/sortByDateDesc';
import { removeDuplicates } from '@utils/removeDuplicates';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

export const HomeModule = () => {
	const router = useRouter();
	const { searchedHistory, updateStoredItem, updateStoredItems } = useSearchHistory();
	const [currentFavorite, setCurrentFavorite] = useState<SearchedCity | null>(null);

	useEffect(() => {
		const favorite = findFavorite(searchedHistory);
		setCurrentFavorite(favorite);
	}, [searchedHistory]);

	const handleSearchButton = () => {
		router.navigate({
			pathname: 'weather/',
			params: {
				latitude: currentFavorite?.location.latitude,
				longitude: currentFavorite?.location.longitude,
			},
		});
	};

	const handleInputPress = () => {
		router.push('/search-modal');
	};

	const handleFavoriteIconPress = (selectedCity: SearchedCity) => {
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

	const sortHistory = (history: SearchedCity[]) => {

		if(!history || history.length === 0) return null;

		const historyWithoutDup = removeDuplicates(history);
		return sortByDateDesc(historyWithoutDup);
	};

	return (
		<View style={tw`flex-1 `}>
			<SearchBar
				prepopulatedSearchedValue={currentFavorite ? currentFavorite.name : ''}
				handleInputPress={handleInputPress}
				handleSearchButton={handleSearchButton}
			/>
			<SearchHistory
				handleIconPress={handleFavoriteIconPress}
				searchedHistory={sortHistory(searchedHistory)}
				currentFavorite={currentFavorite}
			/>
		</View>
	);
};
