import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../styles/style.constants';
import { HomeModule } from '../../modules/home/home.module';
import { Link } from 'expo-router';

export default function Home() {
	return (
		<View style={{ backgroundColor: COLORS.white, flex: 1, padding: SIZES.m }}>
			<HomeModule />
		</View>
	);
}
