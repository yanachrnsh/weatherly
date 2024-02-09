import { GooglePlacesInput } from './components/google-places-input.component';
import { useRouter } from 'expo-router';
import {  GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { useSearchHistory } from '@context/search-history.provider';
import { LinearGradient } from 'expo-linear-gradient';

export const SearchModalModule = () => {
	const router = useRouter();
	const { addSearchedCity } = useSearchHistory();

	const handleSearchPress = (details: GooglePlaceDetail) => {
		addSearchedCity({
			location: {
				latitude: details.geometry.location.lat,
				longitude: details.geometry.location.lng,
			},
			isFavorite: false,
			name: details.name,
			id: details.place_id,
			creationDate: Date.now(),
		});

		// Back navigation is needed for closing modal view 

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
