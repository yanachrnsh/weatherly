import { View } from 'react-native';
import { useEffect, useState, FC } from 'react';
import { SearchBarInput } from './components/search-bar-input.component';
import { SearchBarButton } from './components/search-bar-button.component';
import { useGetWeather } from '../../../../api/search-bar/useGetWeather';
import { CityGeoRequestDto } from '../../../../api/dto/city-geo.request.dto';
import tw from 'twrnc';

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
		<View style={tw`flex-row justify-between items-center mt-3 gap-2`}>
			<SearchBarInput setSearchedCity={setSearchedCity} />
			<SearchBarButton handlePress={handleSearchPress} />
		</View>
	);
};
