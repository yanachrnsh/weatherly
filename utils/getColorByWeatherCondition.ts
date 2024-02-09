export const getColorByWeatherCondition = (condition: string) => {
	switch (condition) {
		case 'Clear':
			return WeatherConditionColorEnum.CLEAR;
		case 'Clouds':
			return WeatherConditionColorEnum.CLOUDS;
		case 'Rain':
			return WeatherConditionColorEnum.RAIN;
		case 'Drizzle':
			return WeatherConditionColorEnum.DRIZZLE;
		case 'Snow':
			return WeatherConditionColorEnum.SNOW;
		case 'Thunderstorm':
			return WeatherConditionColorEnum.THUNDERSTORM;
		default:
			return WeatherConditionColorEnum.CLEAR;
	}
};

enum WeatherConditionColorEnum {
	CLEAR = 'rgba(50,136,222,1)',
	CLOUDS = 'rgba(156,157,159,1)',
	RAIN = 'rgba(90,107,149,1)',
	DRIZZLE = 'rgba(189,191,192,1)',
	SNOW = 'rgba(217,228,246,1)',
	THUNDERSTORM = 'rgba(18,61,73,1)',
}
