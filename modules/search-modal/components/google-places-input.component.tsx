import React from 'react';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { View } from 'react-native';
import { useRouter } from 'expo-router';

export const GooglePlacesInput = () => {
	const router = useRouter();
	return (
		<View
			style={{
				margin: 12,
				backgroundColor: 'transparent',
				zIndex: 10,
				height: 500,
			}}
		>
			<GooglePlacesAutocomplete
				placeholder="Search"
				onFail={error => console.error(error)}
				onPress={(data, details = null) => {
					console.log(data, details);
					router.back();
				}}
				fetchDetails={true}
				query={{
					key: `${GOOGLE_MAPS_API_KEY}`,
					language: 'en',
				}}
			/>
		</View>
	);
};
