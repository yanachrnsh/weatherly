import { View, Text } from 'react-native';
import { FC } from 'react';
import tw from 'twrnc';
import { WeatherDescriptionItem } from './weather-description-item.component';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WeatherInformationModel } from '@model/weather-information.model';
import { filterWeatherDescription } from '@utils/filterWeatherDescription';
import { setupWeatherDescription } from '@utils/setupWeatherDescription';

interface WeatherInformationProps {
	weatherData: WeatherInformationModel;
}

export const WeatherInformation: FC<WeatherInformationProps> = ({ weatherData }) => {
	const weatherDescription = setupWeatherDescription(filterWeatherDescription(weatherData.weatherDescription));
	return (
		<View style={tw`flex-1 justify-end gap-4`}>
			<Text style={tw`text-5xl`}>{weatherData.city}</Text>
			<View style={tw`flex-row w-full items-center justify-between`}>
				<View style={tw`flex-row items-baseline `}>
					<Text style={tw`text-9xl font-bold`}>{`${weatherData.temperature.temp}`}</Text>
					<MaterialCommunityIcons name="temperature-celsius" size={48} color="black" />
				</View>

				<View style={tw`gap-6`}>
					<Text style={tw`text-xl`}>{`L:${weatherData.temperature.temp_min}°`}</Text>
					<Text style={tw`text-xl`}>{`H:${weatherData.temperature.temp_max}°`}</Text>
				</View>
			</View>
			<View style={tw`h-1 w-full bg-black`}></View>
			<Text style={tw`text-2xl`}>{weatherData.weatherDescription.main}</Text>
			<View style={tw` flex-row flex-wrap content-start gap-4 items-center justify-between`}>
				{
					//TODO - Fix the key
					weatherDescription.map((item, index) => (
						<WeatherDescriptionItem key={`${index}-${item}`} title={item[0]} text={item[1]} />
					))
				}
			</View>
		</View>
	);
};
