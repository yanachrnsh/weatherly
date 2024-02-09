import { FC } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import tw from 'twrnc';
import { COLORS } from '@constants/style.constants';

interface ISearchBarButtonProps {
	handlePress: () => void;
	prepopulatedSearchedValue: string;
}

export const SearchBarButton: FC<ISearchBarButtonProps> = ({ handlePress, prepopulatedSearchedValue }) => {
	return (
		<View style={tw`flex-1`}>
			<TouchableOpacity
				style={tw`justify-center items-center bg-[${COLORS.primary}] rounded-xl py-3.5 px-2.5 max-w-[100px] ${prepopulatedSearchedValue ? '' : 'opacity-50'}`}
				onPress={handlePress}
				testID="search-bar-button"
				disabled={!prepopulatedSearchedValue}
			>
				<EvilIcons name="search" color="white" style={tw`h-6`} size={24} />
			</TouchableOpacity>
		</View>
	);
};
