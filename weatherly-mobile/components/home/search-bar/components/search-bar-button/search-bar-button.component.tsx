import { FC } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { styles } from './search-bar-button.style';

interface ISearchBarButtonProps {
  handlePress: () => void;
}

export const SearchBarButton: FC<ISearchBarButtonProps> = ({ handlePress }) => {
	return (
		<View style={styles.searchBtnWrapper}>
			<TouchableOpacity style={styles.searchBtn} onPress={handlePress}>
				<EvilIcons name="search" color="white" style={styles.searchIcon} />
			</TouchableOpacity>
		</View>
	);
};
