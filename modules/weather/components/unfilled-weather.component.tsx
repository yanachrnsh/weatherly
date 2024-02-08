import { View, Text, TouchableOpacity } from 'react-native';
import { FC } from 'react';
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '@constants/style.constants';

interface UnfilledWeatherProps {
	handleButtonPress: () => void;
}

export const UnfilledWeather: FC<UnfilledWeatherProps> = ({ handleButtonPress }) => {
	return (
		<LinearGradient colors={['rgba(212, 111, 202, 0.0375)', 'rgba(255, 255, 255, 0.75)']} style={tw`flex-1 p-2`}>
			<View style={tw`flex-1 justify-center items-center gap-3`}>
				<Text style={tw`text-3xl font-bold`}>Oopsie!</Text>
				<Text style={tw`text-center text-xl`}> It seems you haven`t chosen a location just yet.</Text>
				<TouchableOpacity onPress={handleButtonPress} style={tw`bg-black rounded-md max-w-50 mt-3`}>
					<Text style={tw`text-white text-center px-6 py-3 font-bold`}>Search for a location</Text>
				</TouchableOpacity>
			</View>
		</LinearGradient>
	);
};
