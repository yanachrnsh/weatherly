import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useGetWeather } from '../../api/search-bar/useGetWeather';
import { useEffect, useState } from 'react';
import { WeatherResponseDto } from '../../api/dto/weather.response.dto';

type WeatherParams = {
	latitude: string;
	longitude: string;
	city: string;
};

export const WeatherModule = () => {
	const { latitude, longitude, city } = useLocalSearchParams<WeatherParams>();

	const searchedGeoLocation = {
		latitude: parseFloat(latitude),
		longitude: parseFloat(longitude),
	};

	const defaultWeatherData: WeatherInformation = {
		city: '',
		weatherDescription: {
			main: '',
			description: '',
			icon: '',
			id: 0,
		},
		temperature: {
			temp: 0,
			feels_like: 0,
			temp_min: 0,
			temp_max: 0,
			pressure: 0,
		},
	};

	const { data } = useGetWeather(searchedGeoLocation);

	const [weatherData, setWeatherData] = useState<WeatherInformation>(defaultWeatherData);

	useEffect(() => {
		if (data) {
			const weatherData: WeatherInformation = {
				city: data.data.name,
				weatherDescription: data.data.weather[0],
				temperature: {
					temp: data.data.main.temp,
					feels_like: data.data.main.feels_like,
					temp_min: data.data.main.temp_min,
					temp_max: data.data.main.temp_max,
					pressure: data.data.main.pressure,
				},
			};

			setWeatherData(weatherData);
		}
	}, [data]);


	return (
		<View>
			<Text>{weatherData.city}</Text>
      <Text>{weatherData.temperature.temp}</Text>
      <View>
        <Text>{weatherData.temperature.temp_min}</Text>
        <Text>{weatherData.temperature.temp_max}</Text>
      </View>
			<Text>{weatherData.weatherDescription.description}</Text>
		</View>
	);
};
