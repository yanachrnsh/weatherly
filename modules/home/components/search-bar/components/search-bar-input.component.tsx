import { View, TextInput } from 'react-native';
import { FC } from 'react';
import { useRouter } from 'expo-router';
import tw from 'twrnc';
import { COLORS } from '@constants/style.constants';
import { SearchedCity } from '@model/searched-city.model';

interface ISearchBarInputProps {
	prepopulatedSearchedValue: SearchedCity | null;
}

export const SearchBarInput: FC<ISearchBarInputProps> = ({ prepopulatedSearchedValue }) => {
	const router = useRouter();

	return (
		<View style={tw` flex-3 `}>
			<TextInput
				style={tw`h-13 px-2.5 text-base py-0 rounded-xl bg-[${COLORS.gray}]`}
				placeholder="Chose the City"
				onPressIn={() => router.push('/search-modal')}
				editable={false}
				selectTextOnFocus={false}
				value={prepopulatedSearchedValue ? prepopulatedSearchedValue.name : ''}
			/>
		</View>
	);
};
