import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS } from '../../styles/style.constants';
import { HomeModule } from '../../modules/home/home.module';

export default function Home() {
	return (
		<View style={{ backgroundColor: COLORS.white, flex: 1, padding: 10 }}>
			<HomeModule />
		</View>
	);
}
