import {  View, ActivityIndicator } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useGetWeather } from '@api/search-bar/useGetWeather';
import tw from 'twrnc';
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

	const { data: weatherResponse, isLoading } = useGetWeather(searchedGeoLocation);

	if (!weatherResponse || isLoading) {
		return (
			<View style={tw`flex-1 items-center justify-center`}>
				<ActivityIndicator size="large" color={COLORS.primary} />
			</View>
		);
	}

	return (
		<LinearGradient
			colors={[`${setColorByWeatherCondition(weatherResponse.weatherDescription.main)}`, 'rgba(255, 255, 255, 0.75)']}
			style={tw`flex-1 p-6`}
		>
			<View style={tw`flex-1`}>
				<WeatherInformation weatherData={weatherResponse} />
			</View>
		</LinearGradient>
	);
};
