import { View, Text, TouchableOpacity } from 'react-native';
import { FC } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import tw from 'twrnc';
import { SearchedCity } from '@model/searched-city.model';
import { Link } from 'expo-router';

interface SearchHistoryItemProps {
	searchedCity: SearchedCity;
	handleIconPress: (favorite: SearchedCity) => void;
}

export const SearchHistoryItem: FC<SearchHistoryItemProps> = ({ searchedCity, handleIconPress }) => {
	return (
		<View style={tw`flex-row justify-between w-full items-center `}>
			<Link href={`/weather?latitude=${searchedCity.location.latitude}&longitude=${searchedCity.location.longitude}`} asChild>
				<Text style={tw`flex-3 py-3.5 px-2.5 text-xl`}>{searchedCity.name}</Text>
			</Link>
			<TouchableOpacity onPress={() => handleIconPress(searchedCity)} style={tw`flex-1 flex-row items-center justify-center h-full`}>
				<MaterialIcons name={searchedCity.isFavorite ? 'favorite' : 'favorite-border'} size={24} color={'black'} />
			</TouchableOpacity>
		</View>
	);
};
