import { View, TextInput } from 'react-native';
import { FC } from 'react';
import { styles } from './search-bar-input.style';

interface ISearchBarInputProps {
	setSearchedCity: (text: string) => void;
}

export const SearchBarInput: FC<ISearchBarInputProps> = ({ setSearchedCity }) => {
	return (
		<View style={styles.searchWrapper}>
			<TextInput style={styles.searchInput} placeholder="Chose the City" onChangeText={text => setSearchedCity(text)} />
		</View>
	);
};
