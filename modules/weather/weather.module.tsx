import { Text, View, ActivityIndicator } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useGetWeather } from '@api/search-bar/useGetWeather';
import { useEffect, useState } from 'react';
import { temperatureFormatter } from '@utils/temperatureFormatter';
import tw from 'twrnc';
import { WeatherInformationModel } from '@model/weather-information.model';
import { COLORS } from '@constants/style.constants';
import { UnfilledWeather } from './components/unfilled-weather.component';
import { WeatherInformation } from './components/weather-information.component';
import { setColorByWeatherCondition } from '@utils/setColorByWeatherCondition';
import { LinearGradient } from 'expo-linear-gradient';

type WeatherParams = {
	latitude: string;
	longitude: string;
};

export const WeatherModule = () => {
	const { latitude, longitude } = useLocalSearchParams<WeatherParams>();

	const handleButtonBack = () => {
		router.back();
	};

	if (!latitude || !longitude) {
		return <UnfilledWeather handleButtonPress={handleButtonBack} />;
	}

	const searchedGeoLocation = {
		latitude: parseFloat(latitude),
		longitude: parseFloat(longitude),
	};

	const defaultWeatherData: WeatherInformationModel = {
		city: '',
		weatherDescription: {
			main: '',
			description: '',
			icon: '',
			id: 0,
			pressure: 0,
			visibility: 0,
			wind: { speed: 0, deg: 0, gust: 0 },
			rain: { '1h': 0 },
		},
		temperature: {
			temp: 0,
			feels_like: 0,
			temp_min: 0,
			temp_max: 0,
		},
	};

	const { data: weatherResponse, isLoading } = useGetWeather(searchedGeoLocation);

	const [weatherData, setWeatherData] = useState<WeatherInformationModel>(defaultWeatherData);

	useEffect(() => {
		if (weatherResponse) {
			const weatherData: WeatherInformationModel = {
				city: weatherResponse.data.name,
				weatherDescription: {
					...weatherResponse.data.weather[0],
					visibility: weatherResponse.data.visibility,
					wind: weatherResponse.data.wind,
					rain: weatherResponse.data.rain,
					pressure: weatherResponse.data.main.pressure,
				},
				temperature: {
					temp: temperatureFormatter(weatherResponse.data.main.temp),
					feels_like: temperatureFormatter(weatherResponse.data.main.feels_like),
					temp_min: temperatureFormatter(weatherResponse.data.main.temp_min),
					temp_max: temperatureFormatter(weatherResponse.data.main.temp_max),
				},
			};
			setWeatherData(weatherData);
		}
	}, [weatherResponse]);


	return (
		<LinearGradient
			colors={[`${setColorByWeatherCondition(weatherData.weatherDescription.main)}`, 'rgba(255, 255, 255, 0.75)']}
			style={tw`flex-1 p-6`}
		>
			<View style={tw`flex-1`}>
				{!weatherResponse || isLoading ? (
					<View style={tw`flex-1 items-center justify-center`}>
						<ActivityIndicator size="large" color={COLORS.primary} />
					</View>
				) : (
					<WeatherInformation weatherData={weatherData} />
				)}
			</View>
		</LinearGradient>
	);
};
