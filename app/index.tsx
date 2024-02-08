import React from 'react';
import { COLORS } from '@constants/style.constants';
import { HomeModule } from '@modules/home/home.module';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
	return (
		<LinearGradient colors={['rgba(212, 111, 202, 0.0375)', 'rgba(255, 255, 255, 0.75)']} style={tw`flex-1`}>
			<View style={tw`flex-1 p-6 text-center`}>
				<HomeModule />
			</View>
		</LinearGradient>
	);
}
