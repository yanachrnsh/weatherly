import { FC } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { firstLetterToUpperCase } from '@utils/firstLetterToUpperCase';

interface WeatherDescriptionItemProps {
	title: string;
	text: string;
}

export const WeatherDescriptionItem: FC<WeatherDescriptionItemProps> = ({ title, text }) => {
	return (
		<View style={tw`h-20  w-[45%] max-w-[200px] justify-start gap-2 py-2`}>
			<Text>{firstLetterToUpperCase(title)}</Text>
			<Text>{text}</Text>
		</View>
	);
};
