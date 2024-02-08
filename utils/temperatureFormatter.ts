
export const temperatureFormatter = (temp: number) => {
	return Math.trunc(temperatureKelvinToCelsius(temp));
};

const temperatureKelvinToCelsius = (temp: number) => {
	return temp - 273.15;
};
