import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SearchHistoryProvider } from '../context/search-history.provider';

const queryClient = new QueryClient();

export const unstable_settings = { initialRouteName: 'index' };

const RootLayout = () => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<QueryClientProvider client={queryClient}>
				<SearchHistoryProvider>
					<Stack>
						<Stack.Screen name="index" options={{ headerTitle: 'Pick location', headerShown: false }} />
						<Stack.Screen name="search-modal/index" options={{ headerTitle: 'Pick location', presentation: 'modal' }} />
						<Stack.Screen
							name="weather/index"
							options={{
								headerTitle: 'Weather',
								headerBackTitleVisible: false,
							}}
						/>
					</Stack>
				</SearchHistoryProvider>
			</QueryClientProvider>
		</GestureHandlerRootView>
	);
};

export default RootLayout;
