import { View, Text, TouchableOpacity } from 'react-native';
import { FC } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '@constants/style.constants';
import tw from 'twrnc';
import { SearchedCity } from '@model/searched-city.model';

interface SearchHistoryItemProps {
	searchedCity: SearchedCity;
	handleIconPress: (favorite: SearchedCity) => void;
}

export const SearchHistoryItem: FC<SearchHistoryItemProps> = ({ searchedCity, handleIconPress }) => {
	return (
		<View style={tw`flex-row justify-between w-full items-center border-b-[1px] border-[${COLORS.graySecondary}]`}>
			<Text style={tw`flex-3 py-3.5 px-2.5`}>{searchedCity.name}</Text>
			<TouchableOpacity
				onPress={() => handleIconPress(searchedCity)}
				style={tw`flex-1 flex-row items-center justify-center h-full`}
			>
				<MaterialIcons name={searchedCity.favorite ? 'favorite' : 'favorite-border'} size={24} color={COLORS.secondary} />
			</TouchableOpacity>
		</View>
	);
};
