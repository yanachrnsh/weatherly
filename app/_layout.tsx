import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SearchHistoryProvider } from '../context/search-history.provider';

const queryClient = new QueryClient();

export const unstable_settings = {
	// Ensure any route can link back to `/`
	initialRouteName: 'index',
};

const RootLayout = () => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<QueryClientProvider client={queryClient}>
				<SearchHistoryProvider>
					<Stack>
						<Stack.Screen name="index" options={{ headerTitle: 'Weatherly' }} />
						<Stack.Screen name="search-modal/index" options={{ headerShown: false, presentation: 'modal' }} />
						<Stack.Screen
							name="weather/index"
							options={{
								headerTitle: 'Weather',
								headerBackTitle: 'Back',
							}}
						/>
					</Stack>
				</SearchHistoryProvider>
			</QueryClientProvider>
		</GestureHandlerRootView>
	);
};

export default RootLayout;
