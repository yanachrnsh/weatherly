import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState, FC } from 'react';
import { styles } from './search-bar.style';
import { SearchBarInput } from './components/search-bar-input/search-bar-input.component';
import { SearchBarButton } from './components/search-bar-button/search-bar-button.component';
import { useGetWeather } from '../../../../api/search-bar/useGetWeather';
import { CityGeoRequestDto } from '../../../../api/search-bar/dto/city-geo.request.dto';

export const SearchBar: FC = () => {
	const [searchedCity, setSearchedCity] = useState<CityGeoRequestDto>({ lat: 0, lon: 0 });

	useEffect(() => {
		console.log(searchedCity);
	}, [searchedCity]);

	const { data, refetch } = useGetWeather(searchedCity);

	const handleSearchPress = () => {
		console.log('searchedCity', searchedCity);
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
