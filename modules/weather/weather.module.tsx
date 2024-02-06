import { Text, View, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useGetWeather } from '@api/search-bar/useGetWeather';
import { useEffect, useState } from 'react';
import { temperatureFormatter } from '@utils/temperature-formatter';
import tw from 'twrnc';
import { WeatherInformation } from '@modules/weather/components';
import { COLORS } from '@constants/style.constants';

type WeatherParams = {
	latitude: string;
	longitude: string;
};

export const WeatherModule = () => {
	const { latitude, longitude } = useLocalSearchParams<WeatherParams>();

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

	const { data, isLoading } = useGetWeather(searchedGeoLocation);

	const [weatherData, setWeatherData] = useState<WeatherInformation>(defaultWeatherData);

	useEffect(() => {
		if (data) {
			const weatherData: WeatherInformation = {
				city: data.data.name,
				weatherDescription: data.data.weather[0],
				temperature: {
					temp: temperatureFormatter(data.data.main.temp),
					feels_like: temperatureFormatter(data.data.main.feels_like),
					temp_min: temperatureFormatter(data.data.main.temp_min),
					temp_max: temperatureFormatter(data.data.main.temp_max),
					pressure: temperatureFormatter(data.data.main.pressure),
				},
			};

			setWeatherData(weatherData);
		}
	}, [data]);

	console.log('weatherData', weatherData);

	if (!data || isLoading) {
		<View style={tw`flex-1 items-center justify-center`}>
			<ActivityIndicator size="large" color={COLORS.primary} />
		</View>;
	}

	return (
		<View style={tw`flex-1`}>
			<WeatherInformation weatherData={weatherData} />
		</View>
	);
};
