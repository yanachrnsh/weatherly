import { View } from 'react-native';
import { useEffect, useState, FC } from 'react';
import { SearchBarInput } from './components/search-bar-input.component';
import { SearchBarButton } from './components/search-bar-button.component';
import tw from 'twrnc';

export const SearchBar: FC = () => {
	//TODO: add search functionality
	const [searchedCity, setSearchedCity] = useState({});

	const handleSearchPress = () => {
		console.log('searchedCity', searchedCity);
	};

	return (
		<View style={tw`flex-row justify-between items-center mt-3 gap-2`}>
			<SearchBarInput setSearchedCity={setSearchedCity} />
			<SearchBarButton handlePress={handleSearchPress} />
		</View>
	);
};
