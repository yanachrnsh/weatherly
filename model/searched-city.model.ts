export interface SearchedCity {
	geo: SearchedCityGeo;
	favorite: boolean;
	name: string;
	id: string;
	creationDate: string;
}

interface SearchedCityGeo {
	latitude: number;
	longitude: number;
}
