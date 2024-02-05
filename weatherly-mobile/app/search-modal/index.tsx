import { View, Text } from 'react-native';
import React from 'react';
import { GooglePlacesInput } from '../../modules/search-modal/components/google-places-input/google-places-input.component';

export default function SearchModal() {
	return (
		<View>
			<Text>Search Modal</Text>
			<GooglePlacesInput />
		</View>
	);
}
