import { View } from 'react-native';
import { GooglePlacesInput } from './components/google-places-input.component';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import { GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { useSearchHistory } from '@context/search-history.provider';
import { LinearGradient } from 'expo-linear-gradient';

export const SearchModalModule = () => {
	const router = useRouter();
	const { setStoredHistory } = useSearchHistory();

	const handleSearchPress = (details: GooglePlaceDetail) => {
		setStoredHistory(`${details.place_id}`, {
			location: {
				latitude: details.geometry.location.lat,
				longitude: details.geometry.location.lng,
			},
			favorite: false,
			name: details.name,
			id: details.place_id,
			creationDate: Date.now(),
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
		<LinearGradient colors={['rgba(212, 111, 202, 0.0375)', 'rgba(255, 255, 255, 0.75)']}>
			<GooglePlacesInput handleSearchPress={handleSearchPress} />
		</LinearGradient>
	);
};
