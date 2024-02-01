import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../styles/style.constants';
import { SearchHistoryList, SearchBar } from '../../components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Home() {
	return (
		<QueryClientProvider client={queryClient}>
			<View style={{ backgroundColor: COLORS.white, flex: 1, padding: SIZES.m }}>
				<SearchBar />
				<SearchHistoryList />
			</View>
		</QueryClientProvider>
	);
}
