import { Wind, Rain } from '@api/dto/weather.response.dto';

export interface WeatherInformationModel {
	city: string;
	weatherDescription: WeatherDescription;
	temperature: WeatherTemperature;
}

export interface WeatherDescription {
	main: string;
	description: string;
	icon: string;
	id: number;
	pressure: number;
	visibility: number;
	wind: Wind;
	humidity: number;
}

export enum WeatherDescriptionEnum {
	WIND = 'WIND',
	HUMIDITY = 'HUMIDITY',
	VISIBILITY = 'VISIBILITY',
	PRESSURE = 'PRESSURE',
}

interface WeatherTemperature {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
}
