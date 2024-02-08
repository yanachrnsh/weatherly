import { View } from 'react-native';
import { useEffect, useState, FC } from 'react';
import { SearchBarInput } from './components/search-bar-input.component';
import { SearchBarButton } from './components/search-bar-button.component';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import { useSearchHistory } from '@context/search-history.provider';
import { SearchedCity } from '@model/searched-city.model';
import { findFavorite } from '@utils/findFavorite';

export const SearchBar: FC = () => {
	const [prepopulatedSearchedValue, setPrepopulatedSearchedValue] = useState<SearchedCity | null>(null);

	const router = useRouter();
	const { searchedHistory } = useSearchHistory();

	useEffect(() => {
		const favorite = findFavorite(searchedHistory);
		setPrepopulatedSearchedValue(favorite);
	}, [searchedHistory]);

	const handleSearchPress = () => {
		router.navigate({
			pathname: 'weather/',
			params: {
				latitude: prepopulatedSearchedValue?.location.latitude,
				longitude: prepopulatedSearchedValue?.location.longitude,
			},
		});
	};

	const handleInputPress = () => {
		router.push('/search-modal');
	};

	return (
		<View style={tw`flex-row justify-between items-center mt-3 gap-2`} testID="search-bar">
			<SearchBarInput
				prepopulatedSearchedValue={prepopulatedSearchedValue ? prepopulatedSearchedValue.name : null}
				handlePress={handleInputPress}
			/>
			<SearchBarButton handlePress={handleSearchPress} />
		</View>
	);
};
