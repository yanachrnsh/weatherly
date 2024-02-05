export interface SearchedCity {
	location: SearchedCityLocation;
	favorite: boolean;
	name: string;
	id: string;
	creationDate: string;
}

interface SearchedCityLocation {
	latitude: number;
	longitude: number;
}
