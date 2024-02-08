export const setColorByWeatherCondition = (condition: string) => {
	switch (condition) {
		case 'Clear':
			return WeatherConditionEnum.CLEAR;
		case 'Clouds':
			return WeatherConditionEnum.CLOUDS;
		case 'Rain':
			return WeatherConditionEnum.RAIN;
		case 'Drizzle':
			return WeatherConditionEnum.DRIZZLE;
		case 'Snow':
			return WeatherConditionEnum.SNOW;
		case 'Thunderstorm':
			return WeatherConditionEnum.THUNDERSTORM;
		default:
			return WeatherConditionEnum.CLEAR;
	}
};

enum WeatherConditionEnum {
	CLEAR = 'rgba(242,145,74,1)',
	CLOUDS = 'rgba(156,157,159,1)',
	RAIN = 'rgba(90,107,149,1)',
	DRIZZLE = 'rgba(189,191,192,1)',
	SNOW = 'rgba(217,228,246,1)',
	THUNDERSTORM = 'rgba(18,61,73,1)',
}
