

export interface SearchedCity {
  geo : SearchedCityGeo;
  favorite : boolean;
  name : string;
  id : string;
  creationDate : string;
}

interface SearchedCityGeo {
  lat: number;
  lon: number;

}