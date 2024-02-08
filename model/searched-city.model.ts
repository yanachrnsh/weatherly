export interface SearchedCity {
	location: SearchedCityLocation;
	favorite: boolean;
	name: string;
	id: string;
	creationDate: number;
}

interface SearchedCityLocation {
	latitude: number;
	longitude: number;
}
