import { View } from 'react-native';
import { GooglePlacesInput } from './components';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { useSearchHistory } from '../../context/search-history.provider';

export const SearchModalModule = () => {
	const router = useRouter();
	const { setStoreData } = useSearchHistory();

	const handleSearchPress = (data: GooglePlaceData, details: GooglePlaceDetail) => {
		setStoreData(`${details.place_id}`, {
			location: {
				latitude: details.geometry.location.lat,
				longitude: details.geometry.location.lng,
			},
			favorite: false,
			name: details.name,
			id: details.place_id,
			creationDate: new Date().toISOString(),
		});

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
