import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState, FC } from 'react';
import { styles } from './search-bar.style';
import { SearchBarInput } from './components/search-bar-input/search-bar-input.component';
import { SearchBarButton } from './components/search-bar-button/search-bar-button.component';
import { useGetWeather } from '../../../../api/search-bar/useGetWeather';

interface ISearchBarProps {
	setIsBottomSheetOpen: (value: boolean) => void;
}

export const SearchBar: FC<ISearchBarProps> = ({ setIsBottomSheetOpen }) => {
	const [searchedCity, setSearchedCity] = useState('');

	useEffect(() => {
		console.log(searchedCity);
	}, [searchedCity]);

	const { data, refetch } = useGetWeather({ lat: 0, lon: 0 });

	const handleSearchPress = () => {
		refetch();
		console.log(data);
	};

	return (
		<View style={styles.searchContainer}>
			<SearchBarInput setSearchedCity={setSearchedCity} setIsBottomSheetOpen={setIsBottomSheetOpen} />
			<SearchBarButton handlePress={handleSearchPress} />
		</View>
	);
};
