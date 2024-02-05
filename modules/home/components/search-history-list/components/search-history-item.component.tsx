import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../../../../styles/style.constants';
import tw from 'twrnc';

export const SearchHistoryItem = ({ item }) => {
	return (
		<View style={tw`flex-row justify-between w-full items-center border-b-[1px] border-[${COLORS.graySecondary}]`}>
			<Text style={tw`flex-3 py-3.5 px-2.5`}>{item.key}</Text>
			<TouchableOpacity onPress={() => {}} style={tw`flex-1 flex-row items-center justify-center h-full`}>
				<MaterialIcons name={item.favorite ? 'favorite' : 'favorite-border'} size={24} color={COLORS.secondary} />
			</TouchableOpacity>
		</View>
	);
};
