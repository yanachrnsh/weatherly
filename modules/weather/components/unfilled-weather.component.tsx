import { View, Text } from 'react-native';
import { FC } from 'react';
import tw from 'twrnc';

export const UnfilledWeather: FC = () => {
	return (
		<View style={tw`flex-1 items-center justify-center`}>
			<Text>Oopsie! It seems you haven't chosen a location just yet. Feel free to go back and pick one!</Text>
		</View>
	);
};
