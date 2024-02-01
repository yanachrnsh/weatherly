import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../../../../styles/style.constants';
import { styles } from './search-history-item.style';

export const SearchHistoryItem = ({ item }) => {
	return (
		<View style={styles.listItemWrapper}>
			<Text style={styles.listItemLeft}>{item.key}</Text>
			<TouchableOpacity onPress={() => {}} style={styles.listItemRight}>
				<MaterialIcons name={item.favorite ? 'favorite' : 'favorite-border'} size={24} color={COLORS.secondary} />
			</TouchableOpacity>
		</View>
	);
};
