import { useSearchHistory } from '@context/search-history.provider';
import { SearchedCity } from '@model/searched-city.model';

export const useToggleFavorite = ({
	currentFavorite,
	selectedCity,
}: {
	currentFavorite: SearchedCity | null;
	selectedCity: SearchedCity;
}) => {
	const { updateStoredItem, updateStoredItems } = useSearchHistory();

	if (currentFavorite === null) {
		updateStoredItem(selectedCity.id, { ...selectedCity, favorite: true });
	} else if (selectedCity.id === currentFavorite.id) {
		updateStoredItem(selectedCity.id, { ...selectedCity, favorite: false });
		return;
	} else {
		updateStoredItems([
			{ ...selectedCity, favorite: true },
			{ ...currentFavorite, favorite: false },
		]);
	}
};
