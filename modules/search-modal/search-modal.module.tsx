import { View } from 'react-native';
import { GooglePlacesInput } from './components';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { setStoreData } from '../../utils/setStoreData';

export const SearchModalModule = () => {
	const router = useRouter();

	const handleSearchPress = (data: GooglePlaceData, details: GooglePlaceDetail) => {
		setStoreData(
			`${details.place_id}`,
			createSearchedCity(
				false,
				details.name,
				details.place_id,
				new Date().toISOString(),
				details.geometry.location.lat,
				details.geometry.location.lng
			)
		);

		router.back();
		router.navigate({
			pathname: 'weather/',
			params: {
				latitude: details.geometry.location.lat,
				longitude: details.geometry.location.lng,
			},
		});
	};
	return (
		<View style={tw``}>
			<GooglePlacesInput handleSearchPress={handleSearchPress} />
		</View>
	);
};

function createSearchedCity(...args) {
	const [favorite, name, id, creationDate, latitude, longitude] = args;

	return {
		location: {
			latitude: latitude,
			longitude: longitude,
		},
		favorite: favorite,
		name: name,
		id: id,
		creationDate: creationDate,
	};
}
