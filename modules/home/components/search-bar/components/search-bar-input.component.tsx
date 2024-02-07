import { View, TextInput } from 'react-native';
import { FC } from 'react';
import tw from 'twrnc';
import { COLORS } from '@constants/style.constants';

interface ISearchBarInputProps {
	prepopulatedSearchedValue: string | null;
	handlePress: () => void;
}

export const SearchBarInput: FC<ISearchBarInputProps> = ({ prepopulatedSearchedValue, handlePress }) => {
	return (
		<View style={tw` flex-3 `}>
			<TextInput
				style={tw`h-13 px-2.5 text-base py-0 rounded-xl bg-[${COLORS.gray}]`}
				placeholder="Chose the City"
				onPressIn={handlePress}
				editable={false}
				selectTextOnFocus={false}
				value={prepopulatedSearchedValue ? prepopulatedSearchedValue : ''}
				testID="search-bar-input"
			/>
		</View>
	);
};
