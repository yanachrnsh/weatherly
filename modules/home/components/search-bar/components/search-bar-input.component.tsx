import { View,  Pressable, Text } from 'react-native';
import { FC } from 'react';
import tw from 'twrnc';
import { COLORS } from '@constants/style.constants';

interface ISearchBarInputProps {
	prepopulatedSearchedValue: string;
	handlePress: () => void;
}

export const SearchBarInput: FC<ISearchBarInputProps> = ({ prepopulatedSearchedValue, handlePress }) => {
	return (
		<Pressable onPress={handlePress} style={tw` flex-3 `}>
			<View style={tw`h-13 px-2.5 justify-center self-center text-base py-0 rounded-xl bg-[${COLORS.gray}] max-w-[300px] w-full`}>
				<Text testID="search-bar-input" style={tw`${prepopulatedSearchedValue ? '' : `text-[${COLORS.graySecondary}]`}`}>
					{prepopulatedSearchedValue ? prepopulatedSearchedValue : 'Search'}
				</Text>
			</View>
		</Pressable>
	);
};
