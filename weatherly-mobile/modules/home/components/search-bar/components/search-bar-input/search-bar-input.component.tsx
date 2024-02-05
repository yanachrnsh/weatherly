import { View, TextInput } from 'react-native';
import { FC } from 'react';
import { styles } from './search-bar-input.style';
import { useRouter } from 'expo-router';
import { CityGeoRequestDto } from '../../../../../../api/search-bar/dto/city-geo.request.dto';

interface ISearchBarInputProps {
	setSearchedCity: (text:CityGeoRequestDto ) => void;
}

export const SearchBarInput: FC<ISearchBarInputProps> = ({ setSearchedCity }) => {
	const router = useRouter();
	return (
		<View style={styles.searchWrapper}>
			<TextInput style={styles.searchInput} placeholder="Chose the City" onPressIn={() => router.push('/search-modal')} />
		</View>
	);
};
