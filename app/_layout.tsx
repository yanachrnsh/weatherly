import { Stack, useRouter } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const queryClient = new QueryClient();

export const unstable_settings = {
	// Ensure any route can link back to `/`
	initialRouteName: 'index',
};

const RootLayout = () => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<QueryClientProvider client={queryClient}>
				<Stack>
					<Stack.Screen name="city-weather/index" options={{ headerShown: false }} />
					<Stack.Screen name="index" options={{ headerTitle: 'Weatherly' }} />
					<Stack.Screen name="search-modal/index" options={{ headerShown: false, presentation: 'modal' }} />
					<Stack.Screen name="weather/index" options={{ headerTitle: 'Weather' }} />
				</Stack>
			</QueryClientProvider>
		</GestureHandlerRootView>
	);
};

export default RootLayout;
