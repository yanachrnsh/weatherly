import { FC } from 'react';
import { View, Text, Image, ImageURISource } from 'react-native';
import tw from 'twrnc';

interface WeatherDescriptionItemProps {
	icon: ImageURISource;
	title: string;
	value: string;
}

export const WeatherDescriptionItem: FC<WeatherDescriptionItemProps> = ({ icon, title, value }) => {
	return (
		<View style={tw`bg-red-500`}>
			<View>
				<Image source={icon} />
				<Text>{title}</Text>
			</View>
			<Text>{value}</Text>
		</View>
	);
};
