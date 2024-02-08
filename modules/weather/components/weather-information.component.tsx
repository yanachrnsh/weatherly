import { View, Text, Image, ScrollView } from 'react-native';
import { FC } from 'react';
import tw from 'twrnc';
import { WeatherDescriptionItem } from './weather-description-item.component';
import { COLORS } from '@constants/style.constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WeatherDescription, WeatherInformationModel } from '@model/weather-information.model';
import { filterWeatherDescription } from '@utils/filterWeatherDescription';

interface WeatherInformationProps {
	weatherData: WeatherInformationModel;
}

export const WeatherInformation: FC<WeatherInformationProps> = ({ weatherData }) => {
	return (
		<View style={tw`flex-1 justify-end gap-2`}>
			<Text style={tw`text-5xl`}>{weatherData.city}</Text>
			<Text style={tw`text-lg`}>Date</Text>
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
					filterWeatherDescription(weatherData.weatherDescription).map((item, index) => (
						<WeatherDescriptionItem key={`${index}-${item}`} title={item[0]} text={JSON.stringify(item[1])} />
					))
				}
			</View>
		</View>
	);
};
