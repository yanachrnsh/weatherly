import React from 'react';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export const GooglePlacesInput = () => {
	return (
		<GooglePlacesAutocomplete
			placeholder="Search"
			onPress={(data, details = null) => {
				// 'details' is provided when fetchDetails = true
				console.log(data, details);
			}}
			query={{
				key: { GOOGLE_MAPS_API_KEY },
				language: 'en',
			}}
		/>
	);
};
