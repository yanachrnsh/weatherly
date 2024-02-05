import {FC} from 'react';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Alert, View } from 'react-native';


interface GooglePlacesInputProps {
	handleSearchPress:(data: GooglePlaceData, details: GooglePlaceDetail)=> void
}

export const GooglePlacesInput:FC<GooglePlacesInputProps> = ({handleSearchPress}) => {

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
				onFail={error => Alert.alert('Oops, something went wrong, please try again')}
				onPress={(data, details = null) => handleSearchPress(data, details)}
				fetchDetails={true}
				query={{
					key: `${GOOGLE_MAPS_API_KEY}`,
					language: 'en',
				}}
			/>
		</View>
	);
};
