export interface SearchedCity {
	location: SearchedCityLocation;
	isFavorite: boolean;
	name: string;
	id: string;
	creationDate: number;
}

interface SearchedCityLocation {
	latitude: number;
	longitude: number;
}
