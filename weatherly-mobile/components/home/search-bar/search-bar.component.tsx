import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { styles } from './search-bar.style';
import { SearchBarInput } from './components/search-bar-input/search-bar-input.component';
import { SearchBarButton } from './components/search-bar-button/search-bar-button.component';
import { useGetWeather } from '../../../api/search-bar/useGetWeather';

export const SearchBar = () => {
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
			<SearchBarInput setSearchedCity={setSearchedCity} />
			<SearchBarButton handlePress={handleSearchPress} />
		</View>
	);
};
