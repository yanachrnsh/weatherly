import { View } from 'react-native';
import { GooglePlacesInput } from './components';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';

export const SearchModalModule = () => {

	const router = useRouter();

	const handleSearchPress = (data: GooglePlaceData, details: GooglePlaceDetail )=> {
		console.log(details.geometry.location, data.place_id, data.description);
		router.back();
		router.navigate({
			pathname: 'weather/',
			params: {
				latitude: details.geometry.location.lat,
				longitude: details.geometry.location.lng,
			},
		});

	}
	return (
		<View style={tw``}>
			<GooglePlacesInput handleSearchPress={handleSearchPress} />
		</View>
	);
};
