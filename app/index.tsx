import React from 'react';
import { COLORS } from '../styles/style.constants';
import { HomeModule } from '../modules/home/home.module';
import { View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
	return (
		<View style={{ backgroundColor: COLORS.white, flex: 1, padding: 10 }}>
			<HomeModule />
		</View>
	);
}
