import { View, TextInput } from 'react-native';
import { FC } from 'react';
import { useRouter } from 'expo-router';
import tw from 'twrnc';
import { CityGeoRequestDto } from '@api/dto/city-geo.request.dto';
import { COLORS } from '@constants/style.constants';

interface ISearchBarInputProps {
	setSearchedCity: (text: CityGeoRequestDto) => void;
}

export const SearchBarInput: FC<ISearchBarInputProps> = ({ setSearchedCity }) => {
	const router = useRouter();
	return (
		<View style={tw`flex-3 rounded-xl bg-[${COLORS.gray}] h-13`}>
			<TextInput
				style={tw`flex-1 px-2.5 text-base`}
				placeholder="Chose the City"
				onPressIn={() => router.push('/search-modal')}
				editable={false}
				selectTextOnFocus={false}
			/>
		</View>
	);
};
