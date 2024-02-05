import { View, Text } from 'react-native';
import React from 'react';
import { GooglePlacesInput } from '../../modules/home/components/search-bottom-sheet/search-bottom-sheet.component';

export default function SearchModal() {
	return (
		<View>
			<Text>Search Modal</Text>
			<GooglePlacesInput />
		</View>
	);
}
