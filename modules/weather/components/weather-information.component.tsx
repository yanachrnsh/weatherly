import { View, Text, Image } from 'react-native';
import { FC } from 'react';
import tw from 'twrnc';

interface WeatherInformationProps {
	weatherData: WeatherInformation;
}

export const WeatherInformation: FC<WeatherInformationProps> = ({ weatherData }) => {
	return (
		<View style={tw`flex-1 items-center justify-center`}>
			<Text style={tw`text-xl font-bold`}>{weatherData.city}</Text>
			<Text style={tw`text-3xl font-bold`}>{`${weatherData.temperature.temp}°`}</Text>
			<View style={tw`flex-row gap-2`}>
				<Text>{`L:${weatherData.temperature.temp_min}°`}</Text>
				<Text>{`H:${weatherData.temperature.temp_max}°`}</Text>
			</View>
			<Text>{weatherData.weatherDescription.main}</Text>
		</View>
	);
};
