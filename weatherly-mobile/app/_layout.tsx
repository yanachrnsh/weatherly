import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const queryClient = new QueryClient();

const RootLayout = () => {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<BottomSheetModalProvider>
				<QueryClientProvider client={queryClient}>
					<Stack>
						<Stack.Screen name="home/index" options={{ headerTitle: '' }} />
						<Stack.Screen name="city-weather/index" options={{ headerTitle: '' }} />
						<Stack.Screen name="index" options={{ headerTitle: '' }} />
					</Stack>
				</QueryClientProvider>
			</BottomSheetModalProvider>
		</GestureHandlerRootView>
	);
};

export default RootLayout;
