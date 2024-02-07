import { View } from 'react-native';
import { useEffect, useState, FC } from 'react';
import { SearchBarInput } from './components/search-bar-input.component';
import { SearchBarButton } from './components/search-bar-button.component';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import { useSearchHistory } from '@context/search-history.provider';
import { SearchedCity } from '@model/searched-city.model';

export const SearchBar: FC = () => {
	const [prepopulatedSearchedValue, setPrepopulatedSearchedValue] = useState<SearchedCity | null>(null);

	const router = useRouter();
	const { searchedHistory } = useSearchHistory();

	useEffect(() => {
		if (searchedHistory && searchedHistory.length > 0) {
			const fav = searchedHistory.find(item => item[1].favorite === true);
			setPrepopulatedSearchedValue(fav ? fav[1] : null);
		}
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

	return (
		<View style={tw`flex-row justify-between items-center mt-3 gap-2`}>
			<SearchBarInput prepopulatedSearchedValue={prepopulatedSearchedValue} />
			<SearchBarButton handlePress={handleSearchPress} />
		</View>
	);
};
