import { Stack, useRouter } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const queryClient = new QueryClient();

const RootLayout = () => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
				<QueryClientProvider client={queryClient}>
					<Stack>
						<Stack.Screen name="home/index" options={{ headerTitle: 'Home page' }} />
						<Stack.Screen name="city-weather/index" options={{ headerShown: false}} />
						<Stack.Screen name="index" options={{ headerTitle: '' }} />
						<Stack.Screen name="search-modal/index" options={{ headerTitle: '', presentation: 'modal' }} />
					</Stack>
				</QueryClientProvider>
		</GestureHandlerRootView>
	);
};

export default RootLayout;
