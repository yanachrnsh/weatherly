

export interface CityDto {
  geo : CityGeoRequestDto;
  favorite : boolean;
  name : string;
  id : string;
  creationDate : string;
}

export interface CityGeoRequestDto {
  lat: number;
  lon: number;
}

