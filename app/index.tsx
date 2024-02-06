import React from 'react';
import { COLORS } from '@constants/style.constants';
import { HomeModule } from '@modules/home/home.module';
import { View } from 'react-native';

export default function App() {
	return (
		<View style={{ backgroundColor: COLORS.white, flex: 1, padding: 10 }}>
			<HomeModule />
		</View>
	);
}
