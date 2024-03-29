import { View, Text } from 'react-native';
import { FC } from 'react';
import { SearchBarInput } from './components/search-bar-input.component';
import { SearchBarButton } from './components/search-bar-button.component';
import tw from 'twrnc';

interface SearchBarProps {
	prepopulatedSearchedValue: string;
	handleInputPress: () => void;
	handleSearchButton: () => void;
}

export const SearchBar: FC<SearchBarProps> = ({ prepopulatedSearchedValue, handleInputPress, handleSearchButton }) => {
	return (
		<View>
			<Text style={tw`pt-8 pb-4 text-xl self-center`}>Pick location</Text>
			<View style={tw`flex-row justify-between items-center mt-3 gap-2`} testID="search-bar">
				<SearchBarInput prepopulatedSearchedValue={prepopulatedSearchedValue} handlePress={handleInputPress} />
				<SearchBarButton handlePress={handleSearchButton} prepopulatedSearchedValue={prepopulatedSearchedValue} />
			</View>
		</View>
	);
};
