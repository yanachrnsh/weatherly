import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function CityWeather() {
	return (
		<SafeAreaView style={{ backgroundColor: '#BCBCBC', flex: 1 }}>
			<View>
				<Text>City Weather is here</Text>
			</View>
		</SafeAreaView>
	);
}
