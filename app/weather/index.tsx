import { View } from 'react-native';
import React from 'react';
import { WeatherModule } from '@modules/weather/weather.module';

export default function Weather() {
	return (
		<View style={{ flex: 1 }}>
			<WeatherModule />
		</View>
	);
}
