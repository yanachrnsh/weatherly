interface WeatherInformation {
	city: string;
	weatherDescription: WeatherDescription;
	temperature: WeatherTemperature;
}

interface WeatherDescription {
	main: string;
	description: string;
	icon: string;
  id: number;
}

interface WeatherTemperature {
	temp: number;
	feels_like:   number;
	temp_min:   number;
	temp_max:   number;
	pressure:   number;
}
